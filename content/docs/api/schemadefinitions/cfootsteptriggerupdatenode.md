---
title: CFootStepTriggerUpdateNode
---

# Interface CFootStepTriggerUpdateNode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootStepTriggerUpdateNode.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CFootStepTriggerUpdateNode : CUnaryUpdateNode, CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CUnaryUpdateNode>, ISchemaClass<CFootStepTriggerUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CUnaryUpdateNode](/docs/api/schemadefinitions/cunaryupdatenode)
- [CAnimUpdateNodeBase](/docs/api/schemadefinitions/canimupdatenodebase)
- [ISchemaClass<CAnimUpdateNodeBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CUnaryUpdateNode>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CFootStepTriggerUpdateNode>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Tolerance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootStepTriggerUpdateNode.cs#L20)

```csharp
ref float Tolerance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Triggers

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootStepTriggerUpdateNode.cs#L18)

```csharp
ref CUtlVector<FootStepTrigger> Triggers { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[FootStepTrigger](/docs/api/schemadefinitions/footsteptrigger)>

