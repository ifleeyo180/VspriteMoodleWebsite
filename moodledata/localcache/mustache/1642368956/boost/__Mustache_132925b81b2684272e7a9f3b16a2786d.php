<?php

class __Mustache_132925b81b2684272e7a9f3b16a2786d extends Mustache_Template
{
    private $lambdaHelper;

    public function renderInternal(Mustache_Context $context, $indent = '')
    {
        $this->lambdaHelper = new Mustache_LambdaHelper($this->mustache, $context);
        $buffer = '';

        $buffer .= $indent . '<div class="progressbar_container" id="';
        $value = $this->resolveValue($context->find('backupid'), $context);
        $buffer .= call_user_func($this->mustache->getEscape(), $value);
        $buffer .= '">
';
        $buffer .= $indent . '    ';
        // 'headingident' section
        $value = $context->find('headingident');
        $buffer .= $this->section17c66b870242922c88ae29f26e00f9ff($context, $indent, $value);
        $buffer .= '
';
        $buffer .= $indent . '    ';
        // 'headingident' inverted section
        $value = $context->find('headingident');
        if (empty($value)) {
            
            $buffer .= '<h3 id="';
            $value = $this->resolveValue($context->find('backupid'), $context);
            $buffer .= call_user_func($this->mustache->getEscape(), $value);
            $buffer .= '_status">';
            // 'str' section
            $value = $context->find('str');
            $buffer .= $this->section1c7d0c718c4afc5ff488646b3d0c3256($context, $indent, $value);
            $buffer .= '</h3>';
        }
        $buffer .= '
';
        if ($partial = $this->mustache->loadPartial('core/async_backup_progress')) {
            $buffer .= $partial->renderInternal($context, $indent . '    ');
        }
        $buffer .= $indent . '    <p id="';
        $value = $this->resolveValue($context->find('backupid'), $context);
        $buffer .= call_user_func($this->mustache->getEscape(), $value);
        $buffer .= '_detail">';
        // 'str' section
        $value = $context->find('str');
        $buffer .= $this->section65fae7501c88d985632898ec2efde5fb($context, $indent, $value);
        $buffer .= '<br/>';
        // 'str' section
        $value = $context->find('str');
        $buffer .= $this->sectionAce273d5517a834f37a1596556267e17($context, $indent, $value);
        $buffer .= '</p>
';
        $buffer .= $indent . '    <a id="';
        $value = $this->resolveValue($context->find('backupid'), $context);
        $buffer .= call_user_func($this->mustache->getEscape(), $value);
        $buffer .= '_button" href="';
        $value = $this->resolveValue($context->find('courseurl'), $context);
        $buffer .= call_user_func($this->mustache->getEscape(), $value);
        $buffer .= '" class="btn btn-primary">';
        // 'str' section
        $value = $context->find('str');
        $buffer .= $this->section11005a8d5c265235152346c8d85076b0($context, $indent, $value);
        $buffer .= '</a>
';
        $buffer .= $indent . '</div>
';
        $buffer .= $indent . '
';
        // 'js' section
        $value = $context->find('js');
        $buffer .= $this->section26484647fd216604750ba03e7796cd74($context, $indent, $value);

        return $buffer;
    }

    private function section02711a99e93f13855435c82998ec6b16(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = ' asyncbackuppending, backup ';
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
                
                $buffer .= ' asyncbackuppending, backup ';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section17c66b870242922c88ae29f26e00f9ff(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '<h3 id="{{backupid}}_status">{{# str }} asyncbackuppending, backup {{/ str }}</h3>';
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
                
                $buffer .= '<h3 id="';
                $value = $this->resolveValue($context->find('backupid'), $context);
                $buffer .= call_user_func($this->mustache->getEscape(), $value);
                $buffer .= '_status">';
                // 'str' section
                $value = $context->find('str');
                $buffer .= $this->section02711a99e93f13855435c82998ec6b16($context, $indent, $value);
                $buffer .= '</h3>';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section1c7d0c718c4afc5ff488646b3d0c3256(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = ' asyncrestorepending, backup ';
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
                
                $buffer .= ' asyncrestorepending, backup ';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section65fae7501c88d985632898ec2efde5fb(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = ' asyncnowait, backup ';
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
                
                $buffer .= ' asyncnowait, backup ';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function sectionAce273d5517a834f37a1596556267e17(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = ' asynccheckprogress, backup, {{restoreurl}} ';
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
                
                $buffer .= ' asynccheckprogress, backup, ';
                $value = $this->resolveValue($context->find('restoreurl'), $context);
                $buffer .= call_user_func($this->mustache->getEscape(), $value);
                $buffer .= ' ';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section11005a8d5c265235152346c8d85076b0(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = ' asyncreturn, backup ';
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
                
                $buffer .= ' asyncreturn, backup ';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section26484647fd216604750ba03e7796cd74(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
require([\'core_backup/async_backup\'], function(Async) {
    Async.asyncBackupStatus("{{backupid}}", "{{contextid}}", "{{restoreurl}}", "{{headingident}}");
});
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
                
                $buffer .= $indent . 'require([\'core_backup/async_backup\'], function(Async) {
';
                $buffer .= $indent . '    Async.asyncBackupStatus("';
                $value = $this->resolveValue($context->find('backupid'), $context);
                $buffer .= call_user_func($this->mustache->getEscape(), $value);
                $buffer .= '", "';
                $value = $this->resolveValue($context->find('contextid'), $context);
                $buffer .= call_user_func($this->mustache->getEscape(), $value);
                $buffer .= '", "';
                $value = $this->resolveValue($context->find('restoreurl'), $context);
                $buffer .= call_user_func($this->mustache->getEscape(), $value);
                $buffer .= '", "';
                $value = $this->resolveValue($context->find('headingident'), $context);
                $buffer .= call_user_func($this->mustache->getEscape(), $value);
                $buffer .= '");
';
                $buffer .= $indent . '});
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

}
