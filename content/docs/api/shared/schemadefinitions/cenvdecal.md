---
title: CEnvDecal
---

```csharp
public interface CEnvDecal : CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CEnvDecal>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**DecalMaterial** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvDecal.cs#L16)

```csharp
ref CStrongHandle<InfoForResourceTypeIMaterial2> DecalMaterial { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeIMaterial2](/docs/api/shared/schemadefinitions/infoforresourcetypeimaterial2)>

**Depth** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvDecal.cs#L22)

```csharp
ref float Depth { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**DepthSortBias** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvDecal.cs#L32)

```csharp
ref float DepthSortBias { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**Height** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvDecal.cs#L20)

```csharp
ref float Height { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**ProjectOnCharacters** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvDecal.cs#L28)

```csharp
ref bool ProjectOnCharacters { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**ProjectOnWater** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvDecal.cs#L30)

```csharp
ref bool ProjectOnWater { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**ProjectOnWorld** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvDecal.cs#L26)

```csharp
ref bool ProjectOnWorld { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**RenderOrder** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvDecal.cs#L24)

```csharp
ref uint RenderOrder { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**Width** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvDecal.cs#L18)

```csharp
ref float Width { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

**DecalMaterialUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvDecal.cs#L34)

```csharp
void DecalMaterialUpdated()
```

**DepthSortBiasUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvDecal.cs#L42)

```csharp
void DepthSortBiasUpdated()
```

**DepthUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvDecal.cs#L37)

```csharp
void DepthUpdated()
```

**HeightUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvDecal.cs#L36)

```csharp
void HeightUpdated()
```

**ProjectOnCharactersUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvDecal.cs#L40)

```csharp
void ProjectOnCharactersUpdated()
```

**ProjectOnWaterUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvDecal.cs#L41)

```csharp
void ProjectOnWaterUpdated()
```

**ProjectOnWorldUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvDecal.cs#L39)

```csharp
void ProjectOnWorldUpdated()
```

**RenderOrderUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvDecal.cs#L38)

```csharp
void RenderOrderUpdated()
```

**WidthUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvDecal.cs#L35)

```csharp
void WidthUpdated()
```

