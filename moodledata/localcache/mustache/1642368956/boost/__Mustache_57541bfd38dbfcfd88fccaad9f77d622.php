<?php

class __Mustache_57541bfd38dbfcfd88fccaad9f77d622 extends Mustache_Template
{
    private $lambdaHelper;

    public function renderInternal(Mustache_Context $context, $indent = '')
    {
        $this->lambdaHelper = new Mustache_LambdaHelper($this->mustache, $context);
        $buffer = '';

        $buffer .= $indent . '<div data-region="list-templates">
';
        $buffer .= $indent . '    <form class="form-horizontal">
';
        $buffer .= $indent . '    ';
        if ($parent = $this->mustache->loadPartial('core_form/element-template')) {
            $context->pushBlockContext(array(
                'label' => array($this, 'block472b563012585dad32d96e17bd2a9e0a'),
                'element' => array($this, 'block564706f25d9812a624e0c5f262e5edd6'),
            ));
            $buffer .= $parent->renderInternal($context, $indent);
            $context->popBlockContext();
        }
        $buffer .= $indent . '
';
        $buffer .= $indent . '    ';
        if ($parent = $this->mustache->loadPartial('core_form/element-template')) {
            $context->pushBlockContext(array(
                'element' => array($this, 'block00df51285cf034fac11eea2c4b2dd10d'),
            ));
            $buffer .= $parent->renderInternal($context, $indent);
            $context->popBlockContext();
        }
        $buffer .= '    </form>
';
        $buffer .= $indent . '    <hr/>
';
        if ($partial = $this->mustache->loadPartial('tool_templatelibrary/search_results')) {
            $buffer .= $partial->renderInternal($context, $indent . '    ');
        }
        $buffer .= $indent . '
';
        $buffer .= $indent . '    <hr/>
';
        if ($partial = $this->mustache->loadPartial('tool_templatelibrary/display_template')) {
            $buffer .= $partial->renderInternal($context, $indent . '    ');
        }
        $buffer .= $indent . '
';
        $buffer .= $indent . '</div>
';
        // 'js' section
        $value = $context->find('js');
        $buffer .= $this->section74cabc12e9510cdad78fa92760dd6253($context, $indent, $value);

        return $buffer;
    }

    private function section4b4ede1b27dda18194700aaafae0c9a3(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = 'component, tool_templatelibrary';
            $result = call_user_func($value, $source, $this->lambdaHelper);
            if (strpos($result, '{{') === false) {
                $buffer .= $result;
            } else {
                $buffer .= $this->mustache
                    ->loadLambda((string) $result)
                    ->renderInternal($context);
            }
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= 'component, tool_templatelibrary';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section32e423e2855b2b931357d3f3a8ae86d1(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = 'all, tool_templatelibrary';
            $result = call_user_func($value, $source, $this->lambdaHelper);
            if (strpos($result, '{{') === false) {
                $buffer .= $result;
            } else {
                $buffer .= $this->mustache
                    ->loadLambda((string) $result)
                    ->renderInternal($context);
            }
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= 'all, tool_templatelibrary';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section9e2875c627d2dbad7c957250bbb623f7(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = 'selected';
            $result = call_user_func($value, $source, $this->lambdaHelper);
            if (strpos($result, '{{') === false) {
                $buffer .= $result;
            } else {
                $buffer .= $this->mustache
                    ->loadLambda((string) $result)
                    ->renderInternal($context);
            }
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= 'selected';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section2acfd7c7431a155b3b1d29141e0b466a(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                            <option value="{{component}}" {{#selected}}selected{{/selected}}>{{name}}</option>
                        ';
            $result = call_user_func($value, $source, $this->lambdaHelper);
            if (strpos($result, '{{') === false) {
                $buffer .= $result;
            } else {
                $buffer .= $this->mustache
                    ->loadLambda((string) $result)
                    ->renderInternal($context);
            }
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '                            <option value="';
                $value = $this->resolveValue($context->find('component'), $context);
                $buffer .= call_user_func($this->mustache->getEscape(), $value);
                $buffer .= '" ';
                // 'selected' section
                $value = $context->find('selected');
                $buffer .= $this->section9e2875c627d2dbad7c957250bbb623f7($context, $indent, $value);
                $buffer .= '>';
                $value = $this->resolveValue($context->find('name'), $context);
                $buffer .= call_user_func($this->mustache->getEscape(), $value);
                $buffer .= '</option>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function sectionE97c05bd32d1e9cde582fcd6db417e84(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                    <optgroup label="{{type}}">
                        {{#plugins}}
                            <option value="{{component}}" {{#selected}}selected{{/selected}}>{{name}}</option>
                        {{/plugins}}
                    </optgroup>
                ';
            $result = call_user_func($value, $source, $this->lambdaHelper);
            if (strpos($result, '{{') === false) {
                $buffer .= $result;
            } else {
                $buffer .= $this->mustache
                    ->loadLambda((string) $result)
                    ->renderInternal($context);
            }
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '                    <optgroup label="';
                $value = $this->resolveValue($context->find('type'), $context);
                $buffer .= call_user_func($this->mustache->getEscape(), $value);
                $buffer .= '">
';
                // 'plugins' section
                $value = $context->find('plugins');
                $buffer .= $this->section2acfd7c7431a155b3b1d29141e0b466a($context, $indent, $value);
                $buffer .= $indent . '                    </optgroup>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section9a5212d39aeffe2d5a6f1bdb563520b1(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = ' search, tool_templatelibrary ';
            $result = call_user_func($value, $source, $this->lambdaHelper);
            if (strpos($result, '{{') === false) {
                $buffer .= $result;
            } else {
                $buffer .= $this->mustache
                    ->loadLambda((string) $result)
                    ->renderInternal($context);
            }
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= ' search, tool_templatelibrary ';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section74cabc12e9510cdad78fa92760dd6253(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
    require([\'tool_templatelibrary/search\', \'tool_templatelibrary/display\']);
';
            $result = call_user_func($value, $source, $this->lambdaHelper);
            if (strpos($result, '{{') === false) {
                $buffer .= $result;
            } else {
                $buffer .= $this->mustache
                    ->loadLambda((string) $result)
                    ->renderInternal($context);
            }
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '    require([\'tool_templatelibrary/search\', \'tool_templatelibrary/display\']);
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    public function block472b563012585dad32d96e17bd2a9e0a($context)
    {
        $indent = $buffer = '';
        $buffer .= '            <div class="col-form-label">';
        // 'str' section
        $value = $context->find('str');
        $buffer .= $this->section4b4ede1b27dda18194700aaafae0c9a3($context, $indent, $value);
        $buffer .= '</div>
';
    
        return $buffer;
    }

    public function block564706f25d9812a624e0c5f262e5edd6($context)
    {
        $indent = $buffer = '';
        $buffer .= $indent . '            <select id="selectcomponent" name="component" class="form-control" data-field="component">
';
        $buffer .= $indent . '                <option value="">';
        // 'str' section
        $value = $context->find('str');
        $buffer .= $this->section32e423e2855b2b931357d3f3a8ae86d1($context, $indent, $value);
        $buffer .= '</option>
';
        // 'allcomponents' section
        $value = $context->find('allcomponents');
        $buffer .= $this->sectionE97c05bd32d1e9cde582fcd6db417e84($context, $indent, $value);
        $buffer .= $indent . '            </select>
';
    
        return $buffer;
    }

    public function block4cafc3656ae14a10f1aa2855fe48f7e2($context)
    {
        $indent = $buffer = '';
        $buffer .= '                    ';
        // 'str' section
        $value = $context->find('str');
        $buffer .= $this->section9a5212d39aeffe2d5a6f1bdb563520b1($context, $indent, $value);
        $buffer .= '
';
    
        return $buffer;
    }

    public function blockE00daa955a79771d7486746e1ec28a36($context)
    {
        $indent = $buffer = '';
        $value = $this->resolveValue($context->find('search'), $context);
        $buffer .= $indent . call_user_func($this->mustache->getEscape(), $value);
    
        return $buffer;
    }

    public function block00df51285cf034fac11eea2c4b2dd10d($context)
    {
        $indent = $buffer = '';
        $buffer .= '            ';
        if ($parent = $this->mustache->loadPartial('core/search_input_auto')) {
            $context->pushBlockContext(array(
                'label' => array($this, 'block4cafc3656ae14a10f1aa2855fe48f7e2'),
                'value' => array($this, 'blockE00daa955a79771d7486746e1ec28a36'),
            ));
            $buffer .= $parent->renderInternal($context, $indent);
            $context->popBlockContext();
        }
    
        return $buffer;
    }
}
