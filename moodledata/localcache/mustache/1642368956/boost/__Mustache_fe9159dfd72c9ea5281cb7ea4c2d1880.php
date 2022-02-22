<?php

class __Mustache_fe9159dfd72c9ea5281cb7ea4c2d1880 extends Mustache_Template
{
    public function renderInternal(Mustache_Context $context, $indent = '')
    {
        $buffer = '';

        $buffer .= $indent . '<span class="badge badge-info">';
        $value = $this->resolveValue($context->find('status'), $context);
        $buffer .= call_user_func($this->mustache->getEscape(), $value);
        $buffer .= '</span>
';

        return $buffer;
    }
}
