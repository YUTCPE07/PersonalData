//App.factory('MovieRetriever', function($http, $q, $timeout){
//    var MovieRetriever = new Object();
//
//    MovieRetriever.getmovies = function(i) {
//        var moviedata = $q.defer();
//        var movies;
//
//        var someMovies = ["The Wolverine", "The Smurfs 2", "The Mortal Instruments: City of Bones", "Drinking Buddies", "All the Boys Love Mandy Lane", "The Act Of Killing", "Red 2", "Jobs", "Getaway", "Red Obsession", "2 Guns", "The World's End", "Planes", "Paranoia", "The To Do List", "Man of Steel"];
//
//        var moreMovies = ["The Wolverine", "The Smurfs 2", "The Mortal Instruments: City of Bones", "Drinking Buddies", "All the Boys Love Mandy Lane", "The Act Of Killing", "Red 2", "Jobs", "Getaway", "Red Obsession", "2 Guns", "The World's End", "Planes", "Paranoia", "The To Do List", "Man of Steel", "The Way Way Back", "Before Midnight", "Only God Forgives", "I Give It a Year", "The Heat", "Pacific Rim", "Pacific Rim", "Kevin Hart: Let Me Explain", "A Hijacking", "Maniac", "After Earth", "The Purge", "Much Ado About Nothing", "Europa Report", "Stuck in Love", "We Steal Secrets: The Story Of Wikileaks", "The Croods", "This Is the End", "The Frozen Ground", "Turbo", "Blackfish", "Frances Ha", "Prince Avalanche", "The Attack", "Grown Ups 2", "White House Down", "Lovelace", "Girl Most Likely", "Parkland", "Passion", "Monsters University", "R.I.P.D.", "Byzantium", "The Conjuring", "The Internship"]
//
//        if(i && i.indexOf('T')!=-1)
//        movies=moreMovies;
//        else
//            movies=moreMovies;
//
//        $timeout(function(){
//            moviedata.resolve(movies);
//        },1000);
//
//        return moviedata.promise
//    }
//
//    return MovieRetriever;
//});

App.factory('getData',function($q, $http){
    var sharedService = {};

    sharedService.searchAutocomplate = function (dataLocal) {
        var deferred = $q.defer();
        $http({
            method: "GET",
            dataType: 'json',
            data: JSON.stringify(dataLocal),
            url: '/selectGetName'
        }).success(function (data) {
            deferred.resolve(data);
        });
        return deferred.promise;
    };

    sharedService.SearchSQL = function (dataLocal) {
        var deferred = $q.defer();
        $http({
            method: "POST",
            dataType: 'json',
            data: JSON.stringify(dataLocal),
            url: '/searchAll'
        }).success(function (data) {
            deferred.resolve(data);
        });
        return deferred.promise;
    };

    sharedService.renderData = function (dataLocal) {
        var deferred = $q.defer();
        $http({
            method: "POST",
            dataType: 'json',
            data: JSON.stringify(dataLocal),
            url: '/selectBetwent'
        }).success(function (data) {
            deferred.resolve(data);
        });
        return deferred.promise;
    };

    sharedService.coutRangData = function (dataLocal) {
        var deferred = $q.defer();
        $http({
            method: "GET",
            dataType: 'json',
            data: JSON.stringify(dataLocal),
            url: '/selectGetAll'
        }).success(function (data) {
            deferred.resolve(data);
        });
        return deferred.promise;
    };

    sharedService.editSQL = function (dataLocal) {
        var deferred = $q.defer();
        $http({
            method: "POST",
            dataType: 'json',
            data: JSON.stringify(dataLocal),
            url: '/updatewebdata'
        }).success(function (data) {
            deferred.resolve(data);
        });
        return deferred.promise;
    };

    sharedService.addSQL = function (dataLocal) {
        var deferred = $q.defer();
        $http({
            method: "POST",
            dataType: 'json',
            data: JSON.stringify(dataLocal),
            url: '/addwebdata'
        }).success(function (data) {
            deferred.resolve(data);
        });
        return deferred.promise;
    }

    sharedService.DelSQL = function (dataLocal) {
        var deferred = $q.defer();
        $http({
            method: "POST",
            dataType: 'json',
            data: JSON.stringify(dataLocal),
            url: '/delwebdata'
        }).success(function (data) {
            deferred.resolve(data);
        });
        return deferred.promise;
    };

    return sharedService;
});


