---
title: CRenderMesh
---

```csharp
public interface CRenderMesh : ISchemaClass<CRenderMesh>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Constraints

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRenderMesh.cs#L20)

```csharp
ref CUtlLeanVector<PointerTo<CBaseConstraint>, int> Constraints { get; }
```

#### Property Value

- [CUtlLeanVector](/docs/api/shared/natives/cutlleanvector-2)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[CBaseConstraint](/docs/api/shared/schemadefinitions/cbaseconstraint)>, [int](https://learn.microsoft.com/dotnet/api/system.int32)>

### EmbeddedMapMesh

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRenderMesh.cs#L26)

```csharp
ref bool EmbeddedMapMesh { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GroomData

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRenderMesh.cs#L30)

```csharp
CRenderGroom? GroomData { get; }
```

#### Property Value

- [CRenderGroom](/docs/api/shared/schemadefinitions/crendergroom)?

### MeshDeformParams

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRenderMesh.cs#L28)

```csharp
DynamicMeshDeformParams_t MeshDeformParams { get; }
```

#### Property Value

- [DynamicMeshDeformParams_t](/docs/api/shared/schemadefinitions/dynamicmeshdeformparams_t)

### SceneObjects

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRenderMesh.cs#L18)

```csharp
SchemaUntypedField SceneObjects { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### Skeleton

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRenderMesh.cs#L22)

```csharp
CRenderSkeleton Skeleton { get; }
```

#### Property Value

- [CRenderSkeleton](/docs/api/shared/schemadefinitions/crenderskeleton)

### UseUV2ForCharting

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRenderMesh.cs#L24)

```csharp
ref bool UseUV2ForCharting { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

