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

        public function insert_travel(){
          $data = array(
                  'city' => $this->input->post('cityText'),
                  'price' => $this->input->post('priceText'),
                  'period' => $this->input->post('periodText'),
                  'photo' => $this->input->post('photoText')
          );

          $this->db->insert('travel', $data);
        }



}
