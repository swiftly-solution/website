---
title: PhysicsRagdollPose_t
---

```csharp
public interface PhysicsRagdollPose_t : ISchemaClass<PhysicsRagdollPose_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Owner

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysicsRagdollPose_t.cs#L20)

```csharp
ref CHandle<CBaseEntity> Owner { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### SetFromDebugHistory

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysicsRagdollPose_t.cs#L22)

```csharp
ref bool SetFromDebugHistory { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Transforms

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysicsRagdollPose_t.cs#L18)

```csharp
ref CUtlVector<CTransform> Transforms { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CTransform](/docs/api/shared/natives/ctransform)>

## Methods

### OwnerUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysicsRagdollPose_t.cs#L25)

```csharp
void OwnerUpdated()
```

### TransformsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PhysicsRagdollPose_t.cs#L24)

```csharp
void TransformsUpdated()
```

