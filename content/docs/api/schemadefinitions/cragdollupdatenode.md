---
title: CRagdollUpdateNode
---

# Interface CRagdollUpdateNode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollUpdateNode.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CRagdollUpdateNode : CUnaryUpdateNode, CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CUnaryUpdateNode>, ISchemaClass<CRagdollUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CUnaryUpdateNode](/docs/api/schemadefinitions/cunaryupdatenode)
- [CAnimUpdateNodeBase](/docs/api/schemadefinitions/canimupdatenodebase)
- [ISchemaClass<CAnimUpdateNodeBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CUnaryUpdateNode>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CRagdollUpdateNode>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### PoseControlMethod

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollUpdateNode.cs#L20)

```csharp
ref RagdollPoseControl PoseControlMethod { get; }
```

#### Property Value

- [RagdollPoseControl](/docs/api/schemadefinitions/ragdollposecontrol)

### WeightListIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollUpdateNode.cs#L18)

```csharp
ref int WeightListIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

