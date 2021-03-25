# Project Showcase
These are some projects I have put together, with some information about them.
Most of them are a mix of django rest framework with react.


# 1. Note Manager
This is a simple showcase of a rest framework API that has a frontend using ReactJS.
The project contains Note models, and a UI interface built in React to manage them.
So this project would be a "Note Manager".

### TODO:
- [x] Set up basic project and frontend ReactJS app. 
- [x] Set up Note model
- [x] Set up API access for model.
- [x] Set up authentication for user models.
- [ ] Change authentication prefix to "Bearer" or alike.
- [ ] Make a UI interface for frontend that a user can [interact with][react-api].
- [ ] That's it!
   
<br><br>
use token
```bash
curl http://127.0.0.1:8000/api/notes/ -H "Authorization: Token f7bcb3d6d2ad475bd2ae08aa9ac12c0de285fd89"

[{"id":1,"title":"Title!","content":"Content!","date_created":"2019-12-27T03:56:51.383310Z"}]
```

<br><br>
returns token
```bash
curl http://127.0.0.1:8000/api/auth/ -d "username=admin&password=admin"

```

<br><br>
```bash
curl http://127.0.0.1:8000/api/notes/ -H "Authorization: Token f7bcb3d6d2ad475bd2ae08aa9ac12c0de285fd89" -d "title=test&content=test"
```


[react-api]: https://github.com/valentinogagliardi/django-rest-react-pycon/blob/master/create_react_app_1/react-app/src/common/Api.js
