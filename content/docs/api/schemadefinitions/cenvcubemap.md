---
title: CEnvCubemap
---

# Interface CEnvCubemap

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemap.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CEnvCubemap : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CEnvCubemap>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CEnvCubemap>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Entity_bCopyDiffuseFromDefaultCubemap

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemap.cs#L50)

```csharp
ref bool Entity_bCopyDiffuseFromDefaultCubemap { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Entity_bCustomCubemapTexture

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemap.cs#L20)

```csharp
ref bool Entity_bCustomCubemapTexture { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Entity_bDefaultEnvMap

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemap.cs#L44)

```csharp
ref bool Entity_bDefaultEnvMap { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Entity_bDefaultSpecEnvMap

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemap.cs#L46)

```csharp
ref bool Entity_bDefaultSpecEnvMap { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Entity_bEnabled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemap.cs#L52)

```csharp
ref bool Entity_bEnabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Entity_bIndoorCubeMap

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemap.cs#L48)

```csharp
ref bool Entity_bIndoorCubeMap { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Entity_bMoveable

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemap.cs#L28)

```csharp
ref bool Entity_bMoveable { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Entity_bStartDisabled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemap.cs#L42)

```csharp
ref bool Entity_bStartDisabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Entity_flDiffuseScale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemap.cs#L40)

```csharp
ref float Entity_flDiffuseScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Entity_flEdgeFadeDist

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemap.cs#L36)

```csharp
ref float Entity_flEdgeFadeDist { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Entity_flInfluenceRadius

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemap.cs#L22)

```csharp
ref float Entity_flInfluenceRadius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Entity_hCubemapTexture

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemap.cs#L18)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> Entity_hCubemapTexture { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCTextureBase](/docs/api/schemadefinitions/infoforresourcetypectexturebase)>

### Entity_nEnvCubeMapArrayIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemap.cs#L32)

```csharp
ref int Entity_nEnvCubeMapArrayIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Entity_nHandshake

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemap.cs#L30)

```csharp
ref int Entity_nHandshake { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Entity_nPriority

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemap.cs#L34)

```csharp
ref int Entity_nPriority { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Entity_vBoxProjectMaxs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemap.cs#L26)

```csharp
ref Vector Entity_vBoxProjectMaxs { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### Entity_vBoxProjectMins

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemap.cs#L24)

```csharp
ref Vector Entity_vBoxProjectMins { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### Entity_vEdgeFadeDists

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemap.cs#L38)

```csharp
ref Vector Entity_vEdgeFadeDists { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

## Methods

### Entity_bCopyDiffuseFromDefaultCubemapUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemap.cs#L70)

```csharp
void Entity_bCopyDiffuseFromDefaultCubemapUpdated()
```

### Entity_bCustomCubemapTextureUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemap.cs#L55)

```csharp
void Entity_bCustomCubemapTextureUpdated()
```

### Entity_bDefaultEnvMapUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemap.cs#L67)

```csharp
void Entity_bDefaultEnvMapUpdated()
```

### Entity_bDefaultSpecEnvMapUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemap.cs#L68)

```csharp
void Entity_bDefaultSpecEnvMapUpdated()
```

### Entity_bEnabledUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemap.cs#L71)

```csharp
void Entity_bEnabledUpdated()
```

### Entity_bIndoorCubeMapUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemap.cs#L69)

```csharp
void Entity_bIndoorCubeMapUpdated()
```

### Entity_bMoveableUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemap.cs#L59)

```csharp
void Entity_bMoveableUpdated()
```

### Entity_bStartDisabledUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemap.cs#L66)

```csharp
void Entity_bStartDisabledUpdated()
```

### Entity_flDiffuseScaleUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemap.cs#L65)

```csharp
void Entity_flDiffuseScaleUpdated()
```

### Entity_flEdgeFadeDistUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemap.cs#L63)

```csharp
void Entity_flEdgeFadeDistUpdated()
```

### Entity_flInfluenceRadiusUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemap.cs#L56)

```csharp
void Entity_flInfluenceRadiusUpdated()
```

### Entity_hCubemapTextureUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemap.cs#L54)

```csharp
void Entity_hCubemapTextureUpdated()
```

### Entity_nEnvCubeMapArrayIndexUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemap.cs#L61)

```csharp
void Entity_nEnvCubeMapArrayIndexUpdated()
```

### Entity_nHandshakeUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemap.cs#L60)

```csharp
void Entity_nHandshakeUpdated()
```

### Entity_nPriorityUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemap.cs#L62)

```csharp
void Entity_nPriorityUpdated()
```

### Entity_vBoxProjectMaxsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemap.cs#L58)

```csharp
void Entity_vBoxProjectMaxsUpdated()
```

### Entity_vBoxProjectMinsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemap.cs#L57)

```csharp
void Entity_vBoxProjectMinsUpdated()
```

### Entity_vEdgeFadeDistsUpdated()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemap.cs#L64)

```csharp
void Entity_vEdgeFadeDistsUpdated()
```

