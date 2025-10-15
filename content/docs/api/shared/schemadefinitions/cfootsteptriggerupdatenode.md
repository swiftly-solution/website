---
title: CFootStepTriggerUpdateNode
---

```csharp
public interface CFootStepTriggerUpdateNode : CUnaryUpdateNode, CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CUnaryUpdateNode>, ISchemaClass<CFootStepTriggerUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Tolerance

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootStepTriggerUpdateNode.cs#L19)

```csharp
ref float Tolerance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Triggers

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFootStepTriggerUpdateNode.cs#L17)

```csharp
ref CUtlVector<FootStepTrigger> Triggers { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[FootStepTrigger](/docs/api/shared/schemadefinitions/footsteptrigger)>

