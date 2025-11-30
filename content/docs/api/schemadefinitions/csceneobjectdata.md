---
title: CSceneObjectData
---

# Interface CSceneObjectData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSceneObjectData.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CSceneObjectData : ISchemaClass<CSceneObjectData>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CSceneObjectData>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### DrawBounds

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSceneObjectData.cs#L24)

```csharp
ref CUtlLeanVector<AABB_t, int> DrawBounds { get; }
```

#### Property Value

- [CUtlLeanVector](/docs/api/natives/cutlleanvectortt)<[AABB_t](/docs/api/schemadefinitions/aabb_t), [int](https://learn.microsoft.com/dotnet/api/system.int32)>

### DrawCalls

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSceneObjectData.cs#L22)

```csharp
ref CUtlLeanVector<CMaterialDrawDescriptor, int> DrawCalls { get; }
```

#### Property Value

- [CUtlLeanVector](/docs/api/natives/cutlleanvectortt)<[CMaterialDrawDescriptor](/docs/api/schemadefinitions/cmaterialdrawdescriptor), [int](https://learn.microsoft.com/dotnet/api/system.int32)>

### MaxBounds

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSceneObjectData.cs#L20)

```csharp
ref Vector MaxBounds { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### Meshlets

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSceneObjectData.cs#L26)

```csharp
ref CUtlLeanVector<CMeshletDescriptor, int> Meshlets { get; }
```

#### Property Value

- [CUtlLeanVector](/docs/api/natives/cutlleanvectortt)<[CMeshletDescriptor](/docs/api/schemadefinitions/cmeshletdescriptor), [int](https://learn.microsoft.com/dotnet/api/system.int32)>

### MinBounds

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSceneObjectData.cs#L18)

```csharp
ref Vector MinBounds { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### TintColor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSceneObjectData.cs#L28)

```csharp
ref Vector4D TintColor { get; }
```

#### Property Value

- [Vector4D](/docs/api/natives/vector4d)

