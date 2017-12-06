---
title: 表格识别和还原问题
private: true
description: Form Table Recognition in Images
lang: zh
width: 1280
height: 720
redirect_from:
  - "/表格识别和还原问题/"
  - "/表格识别和还原问题"  
  - "/table-recognition"
---

----------------
## 目录

* 变换问题
* 解决方案
* 技术方法

------------------
## 表格的变换

* 图片化的问题
* 拍摄的变化
* 纸张变形

~~
## 原始表格

![](/img/table-recognition/table_example.png)

~~
### 内容干扰
![](/img/table-recognition/table_example_page.png) ![](/img/table-recognition/table_example_img.png)

(其他内容和水印)

~~
### 拍摄变换
![](/img/table-recognition/table_photo_screen.jpg)

(矩形变成梯形)

~~
### 纸张变形

![](/img/table-recognition/table_photo_paper.jpg)

(直线扭曲)

-------
### 变换总结

<svg id="kity_svg_6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="573" height="508" style="visibility: visible;" viewBox="0 0 573 508"><defs id="kity_defs_7"><linearGradient id="kity_linearGradient_17" x1="0" y1="0" x2="0" y2="1"><stop id="kity_stop_18" offset="0" stop-color="rgb(255, 255, 255)"></stop><stop id="kity_stop_19" offset="1" stop-color="rgb(204, 204, 204)"></stop></linearGradient><marker id="kity_marker_2" orient="auto" refX="6" refY="0" viewBox="-7 -7 14 14" markerWidth="7" markerHeight="7" markerUnits="userSpaceOnUse"><path id="kity_path_3" fill="rgb(123, 115, 191)" stroke="none" d="M6,0A6,6,0,1,1,-6,0A6,6,0,1,1,6,0"></path></marker></defs><g id="kity_g_8"><g id="minder1" text-rendering="optimize-speed"><g id="minder_connect_group1"><path id="kity_path_31" fill="none" stroke="rgb(123, 115, 191)" stroke-width="1" d="M112.5,267.5A210,184,0,0,1,322.5,83.5"></path><path id="kity_path_33" fill="none" stroke="rgb(123, 115, 191)" stroke-width="1" d="M407.5,83.5C427.5,83.5,427.5,31.5,447.5,31.5"></path><path id="kity_path_35" fill="none" stroke="rgb(123, 115, 191)" stroke-width="1" d="M407.5,83.5C427.5,83.5,427.5,83.5,447.5,83.5"></path><path id="kity_path_37" fill="none" stroke="rgb(123, 115, 191)" stroke-width="1" d="M407.5,83.5C427.5,83.5,427.5,135.5,447.5,135.5"></path><path id="kity_path_39" fill="none" stroke="rgb(123, 115, 191)" stroke-width="1" d="M112.5,267.5A210,44,0,0,1,322.5,223.5"></path><path id="kity_path_41" fill="none" stroke="rgb(123, 115, 191)" stroke-width="1" d="M394.5,223.5C414.5,223.5,414.5,197.5,434.5,197.5"></path><path id="kity_path_43" fill="none" stroke="rgb(123, 115, 191)" stroke-width="1" d="M394.5,223.5C414.5,223.5,414.5,249.5,434.5,249.5"></path><path id="kity_path_45" fill="none" stroke="rgb(123, 115, 191)" stroke-width="1" d="M112.5,267.5A210,70,0,0,0,322.5,337.5"></path><path id="kity_path_47" fill="none" stroke="rgb(123, 115, 191)" stroke-width="1" d="M444.5,337.5C464.5,337.5,464.5,311.5,484.5,311.5"></path><path id="kity_path_49" fill="none" stroke="rgb(123, 115, 191)" stroke-width="1" d="M444.5,337.5C464.5,337.5,464.5,363.5,484.5,363.5"></path><path id="kity_path_51" fill="none" stroke="rgb(123, 115, 191)" stroke-width="1" d="M112.5,267.5A210,184,0,0,0,322.5,451.5"></path><path id="kity_path_53" fill="none" stroke="rgb(123, 115, 191)" stroke-width="1" d="M394.5,451.5C414.5,451.5,414.5,425.5,434.5,425.5"></path><path id="kity_path_55" fill="none" stroke="rgb(123, 115, 191)" stroke-width="1" d="M394.5,451.5C414.5,451.5,414.5,477.5,434.5,477.5"></path></g><g id="minder_node1"><path id="node_outline1" fill="rgb(123, 115, 191)" stroke="rgb(61, 57, 96)" d="M25.5,247.5h174a5,5,0,0,1,5,5v30a5,5,0,0,1,-5,5h-174a5,5,0,0,1,-5,-5v-30a5,5,0,0,1,5,-5z" stroke-width="3"></path><g id="node_text1" fill="white"><text id="kity_text_22" text-rendering="inherit" font-size="16" dy=".8em" y="257.09999990463257" x="44.5">表格(单元格+文字)</text></g></g><g id="kity_g_12"><path id="kity_path_13" fill="none" stroke="none" d="M44.5,267.5h0v0h0z"></path></g><g id="kity_g_14"><path id="kity_path_15" fill="none" stroke="none" d="M44.5,267.5h0v0h0z"></path><path id="kity_path_16" fill="none" stroke="none"></path></g><g id="minder_node2"><g id="node_expander4" style="cursor: pointer;"><path id="kity_path_105" fill="white" stroke="gray" d="M323.5,83.5A6,6,0,1,1,311.5,83.5A6,6,0,1,1,323.5,83.5"></path><path id="kity_path_106" fill="none" stroke="gray" d="M313,83.5L322,83.5"></path></g><path id="node_outline5" fill="rgb(239, 238, 246)" stroke="rgb(123, 115, 191)" d="M327.5,70.5h77a3,3,0,0,1,3,3v20a3,3,0,0,1,-3,3h-77a3,3,0,0,1,-3,-3v-20a3,3,0,0,1,3,-3z" stroke-width="1"></path><g id="node_text5" fill="bl"><text id="kity_text_63" text-rendering="inherit" font-size="14" dy=".8em" y="74.40000009536743" x="344.5">图片化</text></g></g><g id="minder_node3"><g id="node_expander1" display="none" style="cursor: pointer;"><path id="kity_path_96" fill="white" stroke="gray" d="M447.5,31.5A6,6,0,1,1,435.5,31.5A6,6,0,1,1,447.5,31.5"></path><path id="kity_path_97" fill="none" stroke="gray"></path></g><path id="node_outline2" fill="none" stroke="none" d="M452.5,20.5h71a5,5,0,0,1,5,5v12a5,5,0,0,1,-5,5h-71a5,5,0,0,1,-5,-5v-12a5,5,0,0,1,5,-5z"></path><g id="node_text2" fill="#00b050"><text id="kity_text_57" text-rendering="inherit" font-size="12" dy=".8em" font-weight="bold" y="23.700000047683716" x="457.5">单元格识别</text></g></g><g id="minder_node4"><g id="node_expander2" display="none" style="cursor: pointer;"><path id="kity_path_99" fill="white" stroke="gray" d="M447.5,83.5A6,6,0,1,1,435.5,83.5A6,6,0,1,1,447.5,83.5"></path><path id="kity_path_100" fill="none" stroke="gray"></path></g><path id="node_outline3" fill="none" stroke="none" d="M452.5,72.5h36a5,5,0,0,1,5,5v12a5,5,0,0,1,-5,5h-36a5,5,0,0,1,-5,-5v-12a5,5,0,0,1,5,-5z"></path><g id="node_text3" fill="#00b050"><text id="kity_text_59" text-rendering="inherit" font-size="12" dy=".8em" y="75.70000004768372" x="457.5">压缩</text></g></g><g id="minder_node5"><g id="node_expander3" display="none" style="cursor: pointer;"><path id="kity_path_102" fill="white" stroke="gray" d="M447.5,135.5A6,6,0,1,1,435.5,135.5A6,6,0,1,1,447.5,135.5"></path><path id="kity_path_103" fill="none" stroke="gray"></path></g><path id="node_outline4" fill="none" stroke="none" d="M452.5,124.5h35a5,5,0,0,1,5,5v12a5,5,0,0,1,-5,5h-35a5,5,0,0,1,-5,-5v-12a5,5,0,0,1,5,-5z"></path><g id="node_text4" fill="#00b050"><text id="kity_text_61" text-rendering="inherit" font-size="12" dy=".8em" y="127.70000004768372" x="457.5">水印</text></g></g><g id="minder_node6"><g id="node_expander7" style="cursor: pointer;"><path id="kity_path_114" fill="white" stroke="gray" d="M323.5,223.5A6,6,0,1,1,311.5,223.5A6,6,0,1,1,323.5,223.5"></path><path id="kity_path_115" fill="none" stroke="gray" d="M313,223.5L322,223.5"></path></g><path id="node_outline8" fill="rgb(239, 238, 246)" stroke="rgb(123, 115, 191)" d="M327.5,210.5h64a3,3,0,0,1,3,3v20a3,3,0,0,1,-3,3h-64a3,3,0,0,1,-3,-3v-20a3,3,0,0,1,3,-3z" stroke-width="1"></path><g id="node_text8" fill="black"><text id="kity_text_69" text-rendering="inherit" font-size="14" dy=".8em" y="214.40000009536743" x="344.5">拍摄</text></g></g><g id="minder_node7"><g id="node_expander5" display="none" style="cursor: pointer;"><path id="kity_path_108" fill="white" stroke="gray" d="M434.5,197.5A6,6,0,1,1,422.5,197.5A6,6,0,1,1,434.5,197.5"></path><path id="kity_path_109" fill="none" stroke="gray"></path></g><path id="node_outline6" fill="none" stroke="none" d="M439.5,186.5h60a5,5,0,0,1,5,5v12a5,5,0,0,1,-5,5h-60a5,5,0,0,1,-5,-5v-12a5,5,0,0,1,5,-5z"></path><g id="node_text6" fill="white"><text id="kity_text_65" text-rendering="inherit" font-size="12" dy=".8em" font-weight="bold" y="189.70000004768372" x="444.5">透视变换</text></g></g><g id="minder_node8"><g id="node_expander6" display="none" style="cursor: pointer;"><path id="kity_path_111" fill="white" stroke="gray" d="M434.5,249.5A6,6,0,1,1,422.5,249.5A6,6,0,1,1,434.5,249.5"></path><path id="kity_path_112" fill="none" stroke="gray"></path></g><path id="node_outline7" fill="none" stroke="none" d="M439.5,238.5h59a5,5,0,0,1,5,5v12a5,5,0,0,1,-5,5h-59a5,5,0,0,1,-5,-5v-12a5,5,0,0,1,5,-5z"></path><g id="node_text7" fill="white"><text id="kity_text_67" text-rendering="inherit" font-size="12" dy=".8em" y="241.70000004768372" x="444.5">线条模糊</text></g></g><g id="minder_node9"><g id="node_expander10" style="cursor: pointer;"><path id="kity_path_123" fill="white" stroke="gray" d="M323.5,337.5A6,6,0,1,1,311.5,337.5A6,6,0,1,1,323.5,337.5"></path><path id="kity_path_124" fill="none" stroke="gray" d="M313,337.5L322,337.5"></path></g><path id="node_outline11" fill="rgb(239, 238, 246)" stroke="rgb(123, 115, 191)" d="M327.5,324.5h114a3,3,0,0,1,3,3v20a3,3,0,0,1,-3,3h-114a3,3,0,0,1,-3,-3v-20a3,3,0,0,1,3,-3z" stroke-width="1"></path><g id="node_text11" fill="black"><text id="kity_text_75" text-rendering="inherit" font-size="14" dy=".8em" y="328.40000009536743" x="344.5">打印(纸质版)</text></g></g><g id="minder_node10"><g id="node_expander8" display="none" style="cursor: pointer;"><path id="kity_path_117" fill="white" stroke="gray" d="M484.5,311.5A6,6,0,1,1,472.5,311.5A6,6,0,1,1,484.5,311.5"></path><path id="kity_path_118" fill="none" stroke="gray"></path></g><path id="node_outline9" fill="none" stroke="none" d="M489.5,300.5h59a5,5,0,0,1,5,5v12a5,5,0,0,1,-5,5h-59a5,5,0,0,1,-5,-5v-12a5,5,0,0,1,5,-5z"></path><g id="node_text9" fill="white"><text id="kity_text_71" text-rendering="inherit" font-size="12" dy=".8em" font-weight="bold" y="303.7000000476837" x="494.5">TPS变换</text></g></g><g id="minder_node11"><g id="node_expander9" display="none" style="cursor: pointer;"><path id="kity_path_120" fill="white" stroke="gray" d="M484.5,363.5A6,6,0,1,1,472.5,363.5A6,6,0,1,1,484.5,363.5"></path><path id="kity_path_121" fill="none" stroke="gray"></path></g><path id="node_outline10" fill="none" stroke="none" d="M489.5,352.5h47a5,5,0,0,1,5,5v12a5,5,0,0,1,-5,5h-47a5,5,0,0,1,-5,-5v-12a5,5,0,0,1,5,-5z"></path><g id="node_text10" fill="white"><text id="kity_text_73" text-rendering="inherit" font-size="12" dy=".8em" y="355.7000000476837" x="494.5">敏感区</text></g></g><g id="minder_node12"><g id="node_expander13" style="cursor: pointer;"><path id="kity_path_132" fill="white" stroke="gray" d="M323.5,451.5A6,6,0,1,1,311.5,451.5A6,6,0,1,1,323.5,451.5"></path><path id="kity_path_133" fill="none" stroke="gray" d="M313,451.5L322,451.5"></path></g><path id="node_outline14" fill="rgb(239, 238, 246)" stroke="rgb(123, 115, 191)" d="M327.5,438.5h64a3,3,0,0,1,3,3v20a3,3,0,0,1,-3,3h-64a3,3,0,0,1,-3,-3v-20a3,3,0,0,1,3,-3z" stroke-width="1"></path><g id="node_text14" fill="black"><text id="kity_text_81" text-rendering="inherit" font-size="14" dy=".8em" y="442.40000009536743" x="344.5">污损</text></g></g><g id="minder_node13"><g id="node_expander11" display="none" style="cursor: pointer;"><path id="kity_path_126" fill="white" stroke="gray" d="M434.5,425.5A6,6,0,1,1,422.5,425.5A6,6,0,1,1,434.5,425.5"></path><path id="kity_path_127" fill="none" stroke="gray"></path></g><path id="node_outline12" fill="none" stroke="none" d="M439.5,414.5h36a5,5,0,0,1,5,5v12a5,5,0,0,1,-5,5h-36a5,5,0,0,1,-5,-5v-12a5,5,0,0,1,5,-5z"></path><g id="node_text12" fill="#bfbfbf"><text id="kity_text_77" text-rendering="inherit" font-size="12" dy=".8em" y="417.7000000476837" x="444.5">残缺</text></g></g><g id="minder_node14"><g id="node_expander12" display="none" style="cursor: pointer;"><path id="kity_path_129" fill="white" stroke="gray" d="M434.5,477.5A6,6,0,1,1,422.5,477.5A6,6,0,1,1,434.5,477.5"></path><path id="kity_path_130" fill="none" stroke="gray"></path></g><path id="node_outline13" fill="none" stroke="none" d="M439.5,466.5h35a5,5,0,0,1,5,5v12a5,5,0,0,1,-5,5h-35a5,5,0,0,1,-5,-5v-12a5,5,0,0,1,5,-5z"></path><g id="node_text13" fill="#a6a6a6"><text id="kity_text_79" text-rendering="inherit" font-size="12" dy=".8em" y="469.7000000476837" x="444.5">遮挡</text></g></g></g></g></svg>



------------
## 解决方案

1. 标准表格图片(表格截图)
1. 透视变换还原
1. TPS(薄板样条函数)还原


