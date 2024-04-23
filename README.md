# Wetube Reloaded

/ -> Home
/join -> Join
/login -> Login
/search -> Search

/edit-user -> Edit User
/delete-user -> Delete uUser
/watch-video -> Watch Video
/edit-video -> Edit Video
/delete-video -> Delete Video

더 좋은 방식은 라우터에 URL을 넣는 것!

[global 라우터]
/ -> Home
/join -> Join
/login -> Login
/search -> Search

[users 라우터]
/users/:id-> See User
/users/logout -> Log Out
/users/edit -> Edit My Profile
/users/delete -> Delete My Profile

[videos 라우터]
/videos/:id -> See Video //:id는 파라미터
/videos/:id/edit -> Edit Video
/videos/:id/delete -> Delete Video
/videos/upload -> Upload Video
코멘트는 나중에~
/videos/comments -> Comment on a video
/videos/comments/delete -> Delete a comment of a videos

라우터는 작업중인 주제를 기반으로 URL을 그룹화
