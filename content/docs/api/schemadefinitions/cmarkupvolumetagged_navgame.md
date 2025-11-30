---
title: CMarkupVolumeTagged_NavGame
---

# Interface CMarkupVolumeTagged_NavGame

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMarkupVolumeTagged_NavGame.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMarkupVolumeTagged_NavGame : CMarkupVolumeWithRef, CMarkupVolumeTagged, CMarkupVolume, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CMarkupVolume>, ISchemaClass<CMarkupVolumeTagged>, ISchemaClass<CMarkupVolumeWithRef>, ISchemaClass<CMarkupVolumeTagged_NavGame>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CMarkupVolumeWithRef](/docs/api/schemadefinitions/cmarkupvolumewithref)
- [CMarkupVolumeTagged](/docs/api/schemadefinitions/cmarkupvolumetagged)
- [CMarkupVolume](/docs/api/schemadefinitions/cmarkupvolume)
- [CBaseModelEntity](/docs/api/schemadefinitions/cbasemodelentity)
- [CBaseEntity](/docs/api/schemadefinitions/cbaseentity)
- [CEntityInstance](/docs/api/schemadefinitions/centityinstance)
- [ISchemaClass<CEntityInstance>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBaseModelEntity>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CMarkupVolume>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CMarkupVolumeTagged>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CMarkupVolumeWithRef>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CMarkupVolumeTagged_NavGame>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### FloodFillAttribute

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMarkupVolumeTagged_NavGame.cs#L20)

```csharp
ref bool FloodFillAttribute { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Scopes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMarkupVolumeTagged_NavGame.cs#L18)

```csharp
ref NavScopeFlags_t Scopes { get; }
```

#### Property Value

- [NavScopeFlags_t](/docs/api/schemadefinitions/navscopeflags_t)

### SplitNavSpace

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMarkupVolumeTagged_NavGame.cs#L22)

```csharp
ref bool SplitNavSpace { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

