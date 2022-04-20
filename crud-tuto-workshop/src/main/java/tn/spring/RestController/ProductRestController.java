package tn.spring.RestController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import tn.spring.Service.IProductService;
import tn.spring.entity.Product;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProductRestController {

	public ProductRestController() {
		// TODO Auto-generated constructor stub
	}
	
	@Autowired
	IProductService productService;
	
	// http://localhost:8081/all-products
	@GetMapping("/all-product")
	public List<Product> getProducts() {
		return productService.retrieveAll();
	}
	
	// http://localhost:8081/add-products
	@PostMapping("/add-product")
	public Product addProduct(@RequestBody Product p){
		return productService.addProduct(p);
	}
	
	// http://localhost:8081/edit-products
	@PutMapping("/edit-product")
	public Product editProduct(@RequestBody Product p){
		return productService.editProduct(p);
	}
	
	// http://localhost:8081/delete-products
	@DeleteMapping("/delete-product/{idProduct}")
	public void deleteProduct(@PathVariable("idProduct") Long id){
		productService.deleteProduct(id);
	}

}
