<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Travel extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */

	public function index()
	{
		// 1. Load the model file
		$this->load->model('travel_model');
		// 2. Use the method that exists in the model to get_all_travels
		$travelList = $this->travel_model->get_all_travels();

		// 3. We pass to the view the list of travels
		$data_array = array(
			'title'=>'Travel list',
			'company'=>'TrianaTravels',
			'travels'=>$travelList
		);

		$this->load->view('travel_list',$data_array);
	}

	public function all()
	{
		echo "You're in Travel > List";
	}
}
