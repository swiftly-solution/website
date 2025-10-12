---
title: CNmTransitionEventConditionNode__CDefinition
---

```csharp
public interface CNmTransitionEventConditionNode__CDefinition : CNmBoolValueNode__CDefinition, CNmValueNode__CDefinition, CNmGraphNode__CDefinition, ISchemaClass<CNmGraphNode__CDefinition>, ISchemaClass<CNmValueNode__CDefinition>, ISchemaClass<CNmBoolValueNode__CDefinition>, ISchemaClass<CNmTransitionEventConditionNode__CDefinition>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **EventConditionRules** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTransitionEventConditionNode__CDefinition.cs#L18)

```csharp
CNmBitFlags EventConditionRules { get; }
```

- Property Value

- [CNmBitFlags](/docs/api/shared/schemadefinitions/cnmbitflags)

### **RequireRuleID** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTransitionEventConditionNode__CDefinition.cs#L16)

```csharp
ref CGlobalSymbol RequireRuleID { get; }
```

- Property Value

- [CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol)

### **RuleCondition** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTransitionEventConditionNode__CDefinition.cs#L22)

```csharp
ref NmTransitionRuleCondition_t RuleCondition { get; }
```

- Property Value

- [NmTransitionRuleCondition_t](/docs/api/shared/schemadefinitions/nmtransitionrulecondition_t)

### **SourceStateNodeIdx** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTransitionEventConditionNode__CDefinition.cs#L20)

```csharp
ref short SourceStateNodeIdx { get; }
```

- Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

