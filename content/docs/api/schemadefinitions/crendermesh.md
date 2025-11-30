---
title: CRenderMesh
---

# Interface CRenderMesh

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRenderMesh.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CRenderMesh : ISchemaClass<CRenderMesh>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CRenderMesh>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Constraints

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRenderMesh.cs#L21)

```csharp
ref CUtlLeanVector<PointerTo<CBaseConstraint>, int> Constraints { get; }
```

#### Property Value

- [CUtlLeanVector](/docs/api/natives/cutlleanvectortt)<[PointerTo](/docs/api/natives/pointertot)<[CBaseConstraint](/docs/api/schemadefinitions/cbaseconstraint)>, [int](https://learn.microsoft.com/dotnet/api/system.int32)>

### EmbeddedMapMesh

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRenderMesh.cs#L27)

```csharp
ref bool EmbeddedMapMesh { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GroomData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRenderMesh.cs#L31)

```csharp
CRenderGroom? GroomData { get; }
```

#### Property Value

- [CRenderGroom](/docs/api/schemadefinitions/crendergroom)?

### MeshDeformParams

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRenderMesh.cs#L29)

```csharp
DynamicMeshDeformParams_t MeshDeformParams { get; }
```

#### Property Value

- [DynamicMeshDeformParams_t](/docs/api/schemadefinitions/dynamicmeshdeformparams_t)

### SceneObjects

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRenderMesh.cs#L19)

```csharp
SchemaUntypedField SceneObjects { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### Skeleton

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRenderMesh.cs#L23)

```csharp
CRenderSkeleton Skeleton { get; }
```

#### Property Value

- [CRenderSkeleton](/docs/api/schemadefinitions/crenderskeleton)

### UseUV2ForCharting

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CRenderMesh.cs#L25)

```csharp
ref bool UseUV2ForCharting { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

