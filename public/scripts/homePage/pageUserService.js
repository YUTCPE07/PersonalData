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


