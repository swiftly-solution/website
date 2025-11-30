---
title: PhysicsRagdollPose_t
---

# Interface PhysicsRagdollPose_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysicsRagdollPose_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface PhysicsRagdollPose_t : ISchemaClass<PhysicsRagdollPose_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<PhysicsRagdollPose_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Owner

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysicsRagdollPose_t.cs#L20)

```csharp
ref CHandle<CBaseEntity> Owner { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CBaseEntity](/docs/api/schemadefinitions/cbaseentity)>

### SetFromDebugHistory

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysicsRagdollPose_t.cs#L22)

```csharp
ref bool SetFromDebugHistory { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Transforms

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysicsRagdollPose_t.cs#L18)

```csharp
ref CUtlVector<CTransform> Transforms { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CTransform](/docs/api/natives/ctransform)>

## Methods

### OwnerUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysicsRagdollPose_t.cs#L25)

```csharp
void OwnerUpdated()
```

### TransformsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysicsRagdollPose_t.cs#L24)

```csharp
void TransformsUpdated()
```

