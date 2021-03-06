/*
 Copyright 2013 Roy Russo

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 Latest Builds: https://github.com/royrusso/elasticsearch-HQ

 http://localhost:9200/_nodes
 */

var NodeInfoListModel = Backbone.Model.extend({
    defaults:{
        selectedNodes:undefined
    },
    initialize:function () {
        console.log("Inside NodeInfoListModel");
    },
    url:function () {
        var sNodes = this.get('selectedNodes');
        if (sNodes == undefined || sNodes.length == 0) {
            return '/_nodes?all=1';
        }
        else {
            var nodes = '';
            for (var i = 0; i < sNodes.length; i++) {
                nodes = nodes + sNodes[i];
                if (sNodes.length-1 > i) {
                    nodes = nodes + ',';
                }
            }
            return '/_nodes/' + nodes;
        }
    }

});