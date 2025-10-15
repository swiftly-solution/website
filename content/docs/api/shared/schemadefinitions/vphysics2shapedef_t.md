---
title: VPhysics2ShapeDef_t
---

```csharp
public interface VPhysics2ShapeDef_t : ISchemaClass<VPhysics2ShapeDef_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Capsules

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysics2ShapeDef_t.cs#L19)

```csharp
ref CUtlVector<RnCapsuleDesc_t> Capsules { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[RnCapsuleDesc_t](/docs/api/shared/schemadefinitions/rncapsuledesc_t)>

### CollisionAttributeIndices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysics2ShapeDef_t.cs#L25)

```csharp
ref CUtlVector<ushort> CollisionAttributeIndices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### Hulls

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysics2ShapeDef_t.cs#L21)

```csharp
ref CUtlVector<RnHullDesc_t> Hulls { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[RnHullDesc_t](/docs/api/shared/schemadefinitions/rnhulldesc_t)>

### Meshes

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysics2ShapeDef_t.cs#L23)

```csharp
ref CUtlVector<RnMeshDesc_t> Meshes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[RnMeshDesc_t](/docs/api/shared/schemadefinitions/rnmeshdesc_t)>

### Spheres

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysics2ShapeDef_t.cs#L17)

```csharp
ref CUtlVector<RnSphereDesc_t> Spheres { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[RnSphereDesc_t](/docs/api/shared/schemadefinitions/rnspheredesc_t)>

