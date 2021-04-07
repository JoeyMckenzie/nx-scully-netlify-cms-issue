import { DOCUMENT } from "@angular/common";
import { Component, Inject, OnInit, Renderer2, RendererFactory2 } from '@angular/core';

@Component({
  selector: 'nx-scully-issue-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

	private renderer2: Renderer2;

	constructor(
    @Inject(DOCUMENT) private document: Document,
    private rendererFactory2: RendererFactory2
  ) {
		this.renderer2 = this.rendererFactory2.createRenderer(null, null);
	}

  private createScript(scriptUrl: string, appendToHead = false) {
    const script: HTMLScriptElement = this.renderer2.createElement('script');
		script.type = 'text/javascript';
    script.text = '';
    script.src = scriptUrl;
		this.renderer2.appendChild(appendToHead ? this.document.head : this.document.body, script);
  }

	ngOnInit(): void {
    // Include the script that builds the page and powers Netlify CMS
    this.createScript('https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js');
	}
}
