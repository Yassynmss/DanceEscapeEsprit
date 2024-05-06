declare module 'leaflet-search' {
    import * as L from 'leaflet';
  
    namespace Control {
      class Search extends L.Control {
        constructor(options?: any);
      }
    }
  
    namespace control {
      function search(options?: any): Control.Search;
    }
  }
  