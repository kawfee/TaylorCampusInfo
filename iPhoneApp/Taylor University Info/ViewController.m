//
//  ViewController.m
//  Taylor University Info
//
//  Created by Bryant_Sell on 4/22/14.
//  Copyright (c) 2014 Taylor University. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad
{
    [super viewDidLoad];
    /* Set up URL */
    //NSString *fullURL = @"http://cse.taylor.edu/~pbrocker/Html-Javascript/";
    NSString *fullURL = @"file:///Volumes/Macintosh%20HD%202/Users/Bryant/GitHub/TaylorCampusInfo/Website/index.html";
    NSURL *url = [NSURL URLWithString:fullURL];
    /* Setup request object for url */
    NSURLRequest *requestObj = [NSURLRequest requestWithURL:url];
    [_viewWeb loadRequest:requestObj]; // Load page
    /* Setup gesture recognizer */
    UISwipeGestureRecognizer * swipeRight = [[UISwipeGestureRecognizer alloc] initWithTarget:self action:@selector(swipeRight:)];
    swipeRight.direction = UISwipeGestureRecognizerDirectionRight; // Set desired direction to recognize
    [self.view addGestureRecognizer:swipeRight]; // Add Recognizer to view
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (void)swipeRight:(UISwipeGestureRecognizer*)gestureRecognizer{
    if([_viewWeb canGoBack]){
        [_viewWeb goBack];
    }
}

@end