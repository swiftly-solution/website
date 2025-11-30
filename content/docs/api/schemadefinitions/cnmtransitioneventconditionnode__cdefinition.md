---
title: CNmTransitionEventConditionNode__CDefinition
---

# Interface CNmTransitionEventConditionNode__CDefinition

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTransitionEventConditionNode__CDefinition.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CNmTransitionEventConditionNode__CDefinition : CNmBoolValueNode__CDefinition, CNmValueNode__CDefinition, CNmGraphNode__CDefinition, ISchemaClass<CNmGraphNode__CDefinition>, ISchemaClass<CNmValueNode__CDefinition>, ISchemaClass<CNmBoolValueNode__CDefinition>, ISchemaClass<CNmTransitionEventConditionNode__CDefinition>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CNmBoolValueNode__CDefinition](/docs/api/schemadefinitions/cnmboolvaluenode__cdefinition)
- [CNmValueNode__CDefinition](/docs/api/schemadefinitions/cnmvaluenode__cdefinition)
- [CNmGraphNode__CDefinition](/docs/api/schemadefinitions/cnmgraphnode__cdefinition)
- [ISchemaClass<CNmGraphNode__CDefinition>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CNmValueNode__CDefinition>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CNmBoolValueNode__CDefinition>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CNmTransitionEventConditionNode__CDefinition>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### EventConditionRules

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTransitionEventConditionNode__CDefinition.cs#L20)

```csharp
CNmBitFlags EventConditionRules { get; }
```

#### Property Value

- [CNmBitFlags](/docs/api/schemadefinitions/cnmbitflags)

### RequireRuleID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTransitionEventConditionNode__CDefinition.cs#L18)

```csharp
ref CGlobalSymbol RequireRuleID { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/natives/cglobalsymbol)

### RuleCondition

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTransitionEventConditionNode__CDefinition.cs#L24)

```csharp
ref NmTransitionRuleCondition_t RuleCondition { get; }
```

#### Property Value

- [NmTransitionRuleCondition_t](/docs/api/schemadefinitions/nmtransitionrulecondition_t)

### SourceStateNodeIdx

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTransitionEventConditionNode__CDefinition.cs#L22)

```csharp
ref short SourceStateNodeIdx { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

