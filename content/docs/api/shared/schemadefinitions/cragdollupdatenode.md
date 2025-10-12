---
title: CRagdollUpdateNode
---

```csharp
public interface CRagdollUpdateNode : CUnaryUpdateNode, CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CUnaryUpdateNode>, ISchemaClass<CRagdollUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **PoseControlMethod** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollUpdateNode.cs#L18)

```csharp
ref RagdollPoseControl PoseControlMethod { get; }
```

- Property Value

- [RagdollPoseControl](/docs/api/shared/schemadefinitions/ragdollposecontrol)

### **WeightListIndex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRagdollUpdateNode.cs#L16)

```csharp
ref int WeightListIndex { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

