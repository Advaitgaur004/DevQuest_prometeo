from rest_framework import viewsets, generics
from rest_framework.response import Response
from .models import ProductFinder
from .serializers import ProductFinderSerializer
from Ecommerce import Amazon, Flipkart, Walmart

class ProductFinderViewSet(viewsets.ReadOnlyModelViewSet, generics.ListAPIView):
    queryset = ProductFinder.objects.all()
    serializer_class = ProductFinderSerializer

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

class ProductCreateViewSet(viewsets.ModelViewSet, generics.CreateAPIView):
    queryset = ProductFinder.objects.all()
    serializer_class = ProductFinderSerializer

    def list(self, request, *args, **kwargs):
        return Response([])

    def create(self, request, *args, **kwargs):
        search_term = request.data.get('search', '')
        amazon_csv = Amazon.scrape_amazon(search_term)
        flipkart_csv = Flipkart.scrape_flipkart(search_term)
        walmart_csv = Walmart.scrape_walmart(search_term)

        instance = ProductFinder.objects.create(
            search=search_term,
            amazon=amazon_csv,
            flipkart=flipkart_csv,
            walmart=walmart_csv
        )

        serializer = self.get_serializer(instance)
        return Response(serializer.data)
