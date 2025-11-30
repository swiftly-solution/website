---
title: VPhysics2ShapeDef_t
---

# Interface VPhysics2ShapeDef_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysics2ShapeDef_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface VPhysics2ShapeDef_t : ISchemaClass<VPhysics2ShapeDef_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<VPhysics2ShapeDef_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Capsules

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysics2ShapeDef_t.cs#L20)

```csharp
ref CUtlVector<RnCapsuleDesc_t> Capsules { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[RnCapsuleDesc_t](/docs/api/schemadefinitions/rncapsuledesc_t)>

### CollisionAttributeIndices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysics2ShapeDef_t.cs#L26)

```csharp
ref CUtlVector<ushort> CollisionAttributeIndices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### Hulls

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysics2ShapeDef_t.cs#L22)

```csharp
ref CUtlVector<RnHullDesc_t> Hulls { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[RnHullDesc_t](/docs/api/schemadefinitions/rnhulldesc_t)>

### Meshes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysics2ShapeDef_t.cs#L24)

```csharp
ref CUtlVector<RnMeshDesc_t> Meshes { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[RnMeshDesc_t](/docs/api/schemadefinitions/rnmeshdesc_t)>

### Spheres

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysics2ShapeDef_t.cs#L18)

```csharp
ref CUtlVector<RnSphereDesc_t> Spheres { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[RnSphereDesc_t](/docs/api/schemadefinitions/rnspheredesc_t)>

