<?php

class Travel_model extends CI_Model {

        public function __construct()
        {
                parent::__construct();
                // Your own constructor code
        }

        public function get_all_travels() {
                // SELECT * FROM travel
                $query = $this->db->get('travel');
                return $query->result();
        }



}
