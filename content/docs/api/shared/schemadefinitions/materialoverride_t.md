---
title: MaterialOverride_t
---

```csharp
public interface MaterialOverride_t : BaseSceneObjectOverride_t, ISchemaClass<BaseSceneObjectOverride_t>, ISchemaClass<MaterialOverride_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### DrawCallIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MaterialOverride_t.cs#L19)

```csharp
ref uint DrawCallIndex { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### LinearTintColor

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MaterialOverride_t.cs#L23)

```csharp
ref Vector LinearTintColor { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### Material

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MaterialOverride_t.cs#L21)

```csharp
ref CStrongHandle<InfoForResourceTypeIMaterial2> Material { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeIMaterial2](/docs/api/shared/schemadefinitions/infoforresourcetypeimaterial2)>

### SubSceneObject

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MaterialOverride_t.cs#L17)

```csharp
ref uint SubSceneObject { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

