App.controller('controllerHome',
    ['$scope', '$location','getData',
        function ($scope, $location, service  ) {

            $scope.sex = ["หญิง", "ชาย"];
            $scope.sexImg = ["/img/femenine.png", "/img/male.png"];
            $scope.class = ["", "ปริญญาตรี", "ปริญญาโท", "ปริญญาเอก"];
            $scope.newpagination = function(currentpage){

                $scope.showdata = [];
                $scope.showloader = true;
                var numItemPerPage = 25;
                service.coutRangData().then(function(data){
                    console.log(data.length)
                    var numMoreItem = data.length;
                    if (currentpage == undefined || currentpage == '' ) {
                        currentpage = 1;
                    }
                    console.log('this is page >>',currentpage)
                    $scope.PageStart = ((numItemPerPage * currentpage) - numItemPerPage);
                    var NumPagination = Math.ceil(numMoreItem/numItemPerPage);
                    $scope.pages = [];
                    for (var i = 1; i <= NumPagination; i++) {
                        $scope.pages.push(i);
                    }
                    var Obj = {};
                    Obj.send_start = $scope.PageStart;
                    Obj.send_end = numItemPerPage;
                    console.log(Obj)
                    service.renderData(Obj).then(function (data) {
                        $scope.showdata = data;
                        $scope.showloader = false;
                        $scope.fnSearchAutocomplte();
                    });
                });

            }

            $scope.fnSearchAutocomplte = function(){
                $scope.movies = [];
                service.searchAutocomplate().then(function (data) {
                    data.forEach(function(predata) {
                        $scope.movies.push(predata.name);
                    });
                });
            }
            
            $scope.showFromEdit = function(datas) {
                console.log("edit", datas.id)
                console.log(datas)
                var fullName = (datas.name).split(' ');
                var fname = fullName[0];
                var lname = fullName[1];
                datas.fname = fname;
                datas.lname = lname;
                $scope.dataFormEdit = angular.copy(datas);
            }

            $scope.showFromDel = function(id) {
                console.log("del", id)
                swal({
                        title: "ยืนยันการลบ",
                        text: "คุณจะไม่สามารถนำข้อมูลนี้กลับมาใช้ได้",
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "ยืนยัน",
                        cancelButtonText: "ยกเลิก",
                        closeOnConfirm: false,
                        closeOnCancel: false
                    },
                    function (isConfirm) {
                        if (isConfirm) {
                            var Obj = {}
                            Obj.send_id = id;
                            console.log(Obj)
                            service.DelSQL(Obj).then(function(data) {
                                if (data == "Success") {
                                    console.log("ลบข้อมูลเเล้ว่")
                                    swal("เรียบร้อย", "ข้อมูลนี้ถูกลบออกจากระบบเเล้ว", "success");
                                    $scope.newpagination();
                                } else {
                                    console.log("error del")
                                    $scope.newpagination();
                                    swal("Error", "ข้อมูลนี้ยังอยู่ในระบบ", "error");
                                }
                            });
                        } else {
                            swal("ยกเลิก", "ข้อมูลของคุณปลอดภัย :)", "error");
                        }
                    }
                );
            }

            $scope.editSubmit = function(datas){

                var numSex = parseInt(datas.sex);
                var name = datas.fname+datas.lname;
                //console.log('name =',name)
                var checkEng = name.search(/[^a-zA-Z]+/);
                var checkTH = name.search(/[a-zA-Z]+/);
                //console.log(checkEng)
                //console.log(checkTH)
                if((checkEng === -1 || checkEng === 0)&&((checkTH === -1 || checkTH === 0)) ){
                    if(checkEng === -1 && checkTH === 0){
                        var eng = ['Miss.','Mr.'];
                        datas.beforname = eng[numSex];
                        //console.log(datas.beforname);
                    }else {
                        var th = ['นางสาว','นาย'];
                        datas.beforname = th[numSex];
                        //console.log(datas.beforname);
                    }
                    service.editSQL(datas).then(function (data) {
                        if (data == "Success") {
                            console.log("เเก้ไขข้อมูลเเล้ว่")
                            $scope.newpagination();
                            $('#fromEditModal').modal('hide')
                            swal("เรียบร้อย", "", "success");
                        } else {
                            console.log("error edit")
                            $scope.testpage();
                            swal("Error", "", "error");
                            $scope.newpagination();
                        }
                    });
                }else {
                    swal("กรอกข้อมูลไม่ถูกต้อง", "กรอกภาษาไทยทั้งหมด หรือ ภาษาอังกฤษทั้งหมด", "error");
                }

            }

            $scope.cancelEdit = function(){
                $("#inputEditName").val("");
                $("#inputEditPhone").val("");
                $("#inputEditClass").val("");
                $("#inputEditId").val("");
                $('input[name="sex_edit"]').prop('checked', false);
            }

            $scope.addSubmit = function(datas){
                //console.log()
                var numSex = parseInt(datas.sex);
                var name = datas.fname+datas.lname;
                //console.log('name =',name)
                var checkEng = name.search(/[^a-zA-Z]+/);
                var checkTH = name.search(/[a-zA-Z]+/);
                //console.log(checkEng)
                //console.log(checkTH)
                if((checkEng === -1 || checkEng === 0)&&((checkTH === -1 || checkTH === 0)) ){
                    if(checkEng === -1 && checkTH === 0){
                        var eng = ['Miss.','Mr.'];
                        datas.beforname = eng[numSex];
                        //console.log(datas.beforname);
                    }else {
                        var th = ['นางสาว','นาย'];
                        datas.beforname = th[numSex];
                        //console.log(datas.beforname);
                    }
                    service.addSQL(datas).then(function (data) {
                        if (data == "Success") {
                            console.log("เพิ่มข้อมูลใหม่")
                            swal("เพิ่มข้อมูลเรียบร้อย", "", "success");
                            $scope.showFormAdd = false;
                            $scope.newpagination();
                        } else {
                            console.log("error add")
                            swal("Error", "", "error");
                            $scope.newpagination();
                        }
                    });
                }else {
                    swal("กรอกข้อมูลไม่ถูกต้อง", "ชื่อ-นามสกุล ต้องกรอกภาษาไทยทั้งหมด หรือภาษาอังกฤษทั้งหมด", "error");
                }
            }

            $scope.clearFromAdd = function(){
                $scope.formAdd.$setPristine();
                $scope.formAdd.$setUntouched();
                $scope.dataFormAdd = {};
                $scope.dataFormAdd.name = $scope.dataFormAdd.phone = '';
                $scope.showFormAdd = false;
            }

            $scope.myPrint = function(){
                window.print();
            }

            $scope.goToView = function(data) {
                $location.path(data);
            }

            $scope.myConSearch = function(dataSearch){
                $scope.showdata = [];
                $scope.showloader = true;
                $scope.paginationhide = true;
                $scope.showBtnAdd = true;
                $scope.showFormAdd = false;
                $scope.alretNoData = false;
                $scope.searchBack = true;
                Obj = {};
                Obj.search = dataSearch;
                console.log('this is con Obj =',Obj)
                service.SearchSQL(Obj).then(function(data) {
                    if (data.length <= 0){
                        swal("ไม่มีข้อมูลในระบบ", "", "warning");
                        $scope.alretNoData = true;
                        $scope.showloader = false;
                        $scope.searchBack = true;
                    }else {
                        $scope.showdata = data;
                        $scope.searchBack = true;
                        $scope.showloader = false;
                    }
                });
            }

            $scope.backSearch = function(){
                $scope.searchBack = false;
                $scope.dataSearch = '';
                $scope.paginationhide = false;
                $scope.showBtnAdd = false;
                $scope.newpagination();
            }

        }
    ]
);
