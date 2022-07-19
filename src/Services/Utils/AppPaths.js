const AppPaths = {
	
	/**
	 * Products path generator
	 * @param {*} id
	 * @return {"/productos/{id}"|"/productos/"}
	 */
	
	products : (id = null) => id ? `/productos/${id}` : '/productos',
	
	/**
	 * Categories path generator
	 * @param {*} id
	 * @return {"/categorias/{id}"|"/categorias/"}
	 */
	
	categories : (id = null) => id ? `/categorias/${id}` : '/categorias'
};

export default AppPaths;