---
title: MaterialOverride_t
---

# Interface MaterialOverride_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MaterialOverride_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface MaterialOverride_t : BaseSceneObjectOverride_t, ISchemaClass<BaseSceneObjectOverride_t>, ISchemaClass<MaterialOverride_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [BaseSceneObjectOverride_t](/docs/api/schemadefinitions/basesceneobjectoverride_t)
- [ISchemaClass<BaseSceneObjectOverride_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<MaterialOverride_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### DrawCallIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MaterialOverride_t.cs#L20)

```csharp
ref uint DrawCallIndex { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### LinearTintColor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MaterialOverride_t.cs#L24)

```csharp
ref Vector LinearTintColor { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### Material

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MaterialOverride_t.cs#L22)

```csharp
ref CStrongHandle<InfoForResourceTypeIMaterial2> Material { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeIMaterial2](/docs/api/schemadefinitions/infoforresourcetypeimaterial2)>

### SubSceneObject

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/MaterialOverride_t.cs#L18)

```csharp
ref uint SubSceneObject { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

