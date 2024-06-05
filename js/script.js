var s_myloader = document.querySelector('.s_myloader');

document.querySelector('.s_getdata').addEventListener('click',function(){


    let promiseObject = new Promise(function(resolve, reject){

        axios.get('https://fakerestapi.azurewebsites.net/api/v1/Books').then(function(response){
            console.log(response);
            if(response.status == 200){
                resolve(response.data);
            }else{
                reject('error');
            }
        });
    })
    
    promiseObject.then(function(data){
        s_myloader.remove();
        // console.log(data);
        var tr = `<table class="table">
                        <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Excerpt</th>
                            <th scope="col">Page Count</th>
                            <th scope="col">Publish Date</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>`;
        data.forEach(element => {
            console.log(element);
            tr = tr + `<tr>
                            <td>`+ element.id +`</td>
                            <td>`+ element.title +`</td>
                            <td>`+ element.description +`</td>
                            <td>`+ element.excerpt +`</td>
                            <td>`+ element.pageCount +`</td>
                            <td>`+ element.publishDate +`</td>
                            <td>
                                <button class="btn btn-sm btn-success">View</button>
                                <button class="btn btn-sm btn-primary">Edit</button>
                                <button class="btn btn-sm btn-danger">Delete</button>
                            </td>
                        </tr>`;
        });
    
        tr = tr + `  </tbody>
                    </table>`;
        console.log(tr);
    
        document.body.innerHTML = document.body.innerHTML + tr;
    }).catch(function(){
    
    });
})

