/**
*
* Jquery Mapael - Dynamic maps jQuery plugin (based on raphael.js)
* Requires jQuery and raphael.js
*
* Map of Haute-Normandie for Mapael
* Equirectangular projection
* 
* @author CCM Benchmark Group
* @source http://fr.m.wikipedia.org/wiki/Fichier:France_location_map-Departements.svg
*/
(function($) {
	$.extend(true, $.fn.mapael, 
		{
			maps :  {
				france_region_23 : {
					width : 79.088707,
					height : 92.694054,
					getCoords : function (lat, lon) {
						var xfactor = 45.48385;
						var xoffset = -2.5999;
						var x = (lon * xfactor) + xoffset;
						
						var yfactor = -65.97284;
						var yoffset = 3303.6884;
						var y = (lat * yfactor) + yoffset;
						return {x : x, y : y};
					},
					elems : {
					    "department-27" : "m 19.54,38.83 c -1.31,0.42 -2.12,1.67 -3.43,2.14 -1.7,1.02 -3.81,0.8 -5.58,1.55 -0.63,1.04 0.6,2.17 0.2,3.29 -0.27,0.99 0.69,1.81 0.75,2.64 -0.3,0.57 -0.96,1.38 -0.24,1.91 0.37,0.53 0.01,1.06 -0.17,1.54 0.31,0.7 0.93,-0.24 1.25,-0.49 0.77,-0.55 2.29,0.13 1.94,1.19 0.27,1.19 -1.23,1.05 -1.95,1.5 -1.05,0.2 -0.14,1.42 0.37,1.7 0.52,0.69 1.73,0.27 1.98,1.2 0.05,1.21 -0.29,2.55 0.01,3.7 0.48,0.29 1.6,0.16 1.76,0.81 -0.5,0.82 -1.53,1.67 -1.03,2.76 0.11,0.45 0.79,1.17 0.35,1.55 -0.61,0.07 -1.64,-0.16 -1.65,0.75 -0.42,0.99 0.39,1.98 1.4,1.96 0.65,0.14 1.55,0.59 1.65,1.19 -0.66,0.94 -0.73,2.08 -0.77,3.17 -0.53,1.24 -1.73,2.26 -1.88,3.63 0.48,0.6 1.37,0.76 1.72,1.48 1.01,0.33 2.15,0.11 3.12,0.64 0.76,0.06 1.52,-0.02 2.26,0.26 0.83,-0.1 1.31,-1.54 2.24,-0.79 0.22,0.29 0.23,0.8 0.67,0.95 0.26,0.41 -0.15,1.41 0.63,1.32 0.38,-0.18 0.67,0.01 0.32,0.36 -1.25,0.98 -0.03,1.6 0.87,2.15 1.17,0.83 2.42,1.82 3.81,2.12 0.85,0.48 1.2,1.35 1.47,2.22 0.74,0.7 0.41,1.42 -0.24,2.05 -0.3,0.26 -1.23,0.54 -0.76,1.04 0.75,-0.03 1.51,0.55 1.21,1.37 -0.21,0.67 0.61,1.39 1.07,0.71 0.61,0.02 1.25,0.02 1.69,-0.48 0.65,-0.17 1.47,-0.24 1.67,-1.05 0.16,-0.59 0.56,-1.82 1.37,-1.44 0.89,0.61 2.37,0.5 3,-0.43 0.42,-0.4 0.95,-0.42 1.41,-0.17 1.42,0 2.28,-1.35 3.28,-2.06 0.58,0.39 1.26,0.06 1.88,0.44 0.99,0.04 0.69,-1.36 0.75,-1.99 -0.24,-0.83 0.98,-0.31 1.41,-0.23 -0.01,0.63 0.44,1.1 1.1,0.88 0.81,-0.25 1.38,0.67 2.12,0.49 0.47,-0.55 1.48,-0.45 1.78,0.22 0.86,0.15 1.7,-0.94 2.57,-0.21 1.04,0.41 1.49,-1.12 2.44,-1.28 0.82,-0.31 -0.3,-1.19 -0.37,-1.78 -0.35,-0.68 -0.22,-1.55 0.53,-1.85 0.89,-0.43 1.22,-1.7 2.31,-1.69 1.18,-0.1 2.69,-1.26 1.72,-2.48 0.03,-0.56 -0.45,-1.01 -0.51,-1.48 0.39,-0.35 0.41,-1.15 1.11,-1 0.54,0.11 1.75,-0.09 1.33,-0.89 -0.49,-0.45 -0.4,-1.19 0.28,-1.42 0.38,-0.9 -1.27,0.13 -1.8,-0.18 -0.44,-0.38 -0.34,-0.92 0.1,-1.24 0.55,-0.68 -0,-1.5 -0.57,-1.94 -0.23,-0.39 -0.17,-0.91 -0.5,-1.23 -0.21,-0.51 0.46,-1.71 0.98,-0.98 0.8,0.8 1.8,-0.37 1.86,-1.2 0.1,-0.56 0.3,-0.23 0.46,0.09 0.91,0.46 2.05,0.14 2.88,-0.36 0.46,-0.39 1.14,0.1 1.52,-0.28 0.08,-1.52 1.79,-2.43 1.75,-3.99 1.03,-1.58 0.09,-3.98 1.76,-5.24 0.67,-0.79 0.03,-2.23 1.16,-2.67 0.67,-0.35 1.88,-0.68 2.13,0.33 0.23,0.69 1.19,0.78 1.4,0.01 0.28,-0.6 -0.04,-1.23 -0.07,-1.84 -0.3,-0.33 -1.17,0.01 -1,-0.71 -0.04,-1.4 -0.1,-2.85 -0.68,-4.11 0,-1.14 -1.73,-1.55 -1.63,-2.71 -0.27,-0.51 -1.01,-0.34 -1.05,0.24 -0.47,0.22 -0.99,-0.65 -1.54,-0.26 -0.87,0.33 -1.59,-0.97 -2.53,-0.59 -0.7,-0.07 -0.85,-1.1 -1.39,-1.47 -0.43,-0.63 -1.38,-0.57 -1.72,0.05 -0.49,0.13 -0.59,-0.67 -1.17,-0.5 -1,0.08 -1.64,-0.95 -2.68,-0.74 -1.25,-0.04 -2.56,0.03 -3.77,-0.18 -0.55,0.14 -1.14,0.47 -1.16,1.05 -0.34,0.63 -1.1,0.47 -1.59,0.76 -0.02,0.7 0.18,1.63 -0.54,2.12 -0.83,0.31 -0.58,1.33 -0.74,1.96 -0.51,0.37 -0.49,1.4 -1.32,1.17 -0.8,0.11 -1.86,-0.37 -2.52,0.18 -0.12,0.72 -1.23,0.29 -1.74,0.52 -0.87,0.08 -1.53,0.87 -1.43,1.75 -1.16,0.22 -2.69,-0.07 -3.6,0.81 -0.04,0.55 0.69,1.02 0.21,1.55 -0.19,0.4 0.58,1.1 -0.23,0.98 -0.87,-0.08 -1.7,0.36 -2.52,0.42 -0.57,-0.56 -0.96,-1.82 -2.01,-1.36 -0.4,-0.17 0.2,-0.75 0.06,-1.06 -0.31,-0.56 -0.58,-1.17 -0.89,-1.68 -0.72,-0.12 -1.16,0.65 -1.48,1.13 -0.75,-0.06 -0.6,-1.24 -1.34,-1.46 -0.36,-0.4 -1.16,-0.12 -1.43,-0.47 0.16,-0.76 0.79,-1.51 1.65,-1.21 0.67,-0.1 1.52,0.48 2,0.1 -0.24,-0.81 -0.08,-1.86 -0.57,-2.54 -0.49,-0.05 -1.02,1.08 -1.44,0.5 0.14,-0.72 -0.43,-1.35 -1.17,-1.23 -0.79,0.03 -2.1,-0.02 -2.06,-1.09 -0.42,-0.77 -1.25,0.36 -1.75,-0.37 -0.8,-0.28 -1.47,0.68 -2.3,0.43 -1,0.32 -2.27,0.67 -3.23,0.11 0.06,-0.64 -0.57,-0.94 -1.01,-1.29 -0.73,-0.57 -2,0.16 -2.59,-0.79 -1.11,-0.9 -1.73,-2.48 -3.13,-2.96 -0.08,-0.01 -0.16,-0.01 -0.24,0 z",
					    "department-76" : "m 62.31,0.11 c -0.73,-0.12 -0.81,1.11 -1.56,0.7 -0.81,-0.55 -1.62,-0.55 -2.26,0.28 -2.76,2.05 -4.86,5.06 -8.22,6.21 -2.33,0.84 -4.29,2.57 -6.85,2.67 -1.5,0.07 -3.05,0.03 -4.38,0.85 -2.08,0.86 -4.36,1.18 -6.44,2.07 -2.73,0.39 -5.63,0.15 -8.21,1.33 -2.95,1.05 -5.25,3.33 -8.19,4.45 -1.34,0.53 -2.65,1.19 -3.61,2.26 -1.16,0.82 -2.65,0.63 -3.82,1.48 -1.21,0.68 -2.75,0.75 -3.62,1.97 -1.46,1.38 -1.18,3.64 -2.15,5.28 -0.92,2.28 -2.41,4.38 -2.99,6.78 0.35,1.27 1.53,2.23 2.66,2.82 0.61,0.13 1.23,0.27 1.6,0.77 0.67,0.27 1.07,-0.83 1.71,-0.23 2.87,1.51 6.41,1.51 9.44,0.51 1.52,-0.43 2.94,-1.43 4.45,-1.66 1.73,0.78 2.43,3.15 4.35,3.63 0.78,0.16 1.3,-0.81 1.96,-0.82 0.04,0.43 -0.68,1.11 0.07,1.41 0.58,0.05 0.49,0.62 0.67,0.98 0.88,0.38 1.89,-0.01 2.73,-0.25 0.86,0.37 1.66,-0.94 2.45,-0.4 0.59,0.57 1.3,-0.06 1.28,-0.7 0.62,0.61 0.31,2.21 1.51,2.1 0.84,0.17 2.15,-0.48 2.29,0.7 0.19,0.78 0.85,0.19 1.27,0.01 0.6,0.48 0.37,1.57 0.73,2.23 0.16,0.28 0.37,0.66 -0.1,0.73 -1.04,0.2 -2.38,-0.62 -3.25,0.24 -0.2,0.88 1.18,0.85 1.66,1.31 0.3,0.26 -0.05,1.36 0.62,0.91 0.4,-0.4 0.99,-1 1.51,-1 0.34,0.56 0.6,1.24 1.06,1.67 -0.06,0.55 0.18,0.97 0.67,1.15 0.51,0.39 1,0.89 1.15,1.43 0.79,-0.1 1.55,-0.52 2.33,-0.59 0.2,-0.33 0.01,-0.77 0.32,-1.13 0.3,-0.53 -0.95,-1.03 -0.19,-1.35 0.98,-0.64 2.16,-0.63 3.25,-0.83 0.53,-0.47 0.55,-1.44 1.36,-1.61 0.22,-0.44 0.87,-0.19 1.23,-0.39 0.2,0.69 0.92,0.07 0.75,-0.43 -0.12,-0.64 0.73,0.05 1.05,-0.1 0.95,0.15 2.28,0.35 2.69,-0.8 0.4,-0.68 0.01,-2.06 1.06,-2.2 0.66,-0.53 0.24,-1.51 0.34,-2.16 0.71,-0.12 1.39,-0.55 1.63,-1.2 0.78,-0.14 1.35,-0.8 2.05,-1.01 0.16,0.85 1.42,0.45 2.02,0.6 1.11,-0.01 2.18,0.18 3.14,0.7 0.54,0.1 1.15,-0.01 1.52,0.47 0.5,-0.08 0.96,-0.76 1.53,-0.27 0.87,0.35 0.95,1.7 1.93,1.75 0.95,-0.28 1.71,1.21 2.58,0.48 0.45,-0.19 0.64,0.25 0.86,0.49 0.41,-0.07 0.63,-0.56 1.02,-0.72 0.68,-0.8 0.41,-1.99 1.33,-2.62 0.33,-0.81 1.28,-1.12 1.6,-1.93 -0.03,-0.48 0.18,-0.8 0.53,-1.05 0.31,-0.75 -1.1,-1.52 -1.36,-0.58 -0.23,0.3 -0.47,1.02 -0.92,0.51 -0.38,-0.18 -1.33,-0.73 -0.59,-1.14 0.72,-0.32 1.26,-1.6 0.24,-1.91 -0.55,-0.28 0.2,-1.16 -0.25,-1.6 -0.24,-0.46 -0.79,-0.45 -1.17,-0.51 -0.43,-0.37 -0.11,-0.66 0.39,-0.68 -0.05,-0.73 -1.01,-1.35 0.18,-1.91 0.69,-0.47 0.41,-1.35 -0.21,-1.71 -0.63,-0.56 0.6,-1 0.67,-1.59 0.02,-0.97 1.5,-1.01 1.25,-2.05 -0.12,-0.75 -0.95,-0.17 -1.06,0.28 -0.35,0.82 -1.33,0.36 -1.59,-0.25 0.4,-0.65 1.23,-1.17 1.05,-2.09 -0.1,-0.86 1.6,-0.51 1.29,-1.5 -0.01,-0.56 0.32,-1.2 0.98,-0.88 0.41,0.21 1.23,0.01 0.79,-0.54 -0.48,-0.54 -1.1,-0.89 -1.35,-1.63 -0.73,-1.23 -1.15,-2.62 -1.5,-3.96 0.24,-0.66 -0.36,-1.15 -0.25,-1.82 -0.25,-0.79 -1.2,-1.07 -1.43,-1.92 -1.23,-1.52 -3.66,-1.61 -4.6,-3.45 -0.28,-0.48 -0.44,-1 -1.04,-1.16 -0.91,-0.5 -1.48,-1.36 -2.11,-2.13 -0.98,-0.5 -1.77,-1.28 -2.66,-1.91 -0.07,-0.61 0.41,-1.73 -0.59,-1.83 -0.1,-0.03 -0.21,-0.04 -0.32,-0.02 z"
					}
				}
			}
		}
	);
})(jQuery);