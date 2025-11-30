---
title: CCSPlayer_UseServices
---

# Interface CCSPlayer_UseServices

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_UseServices.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCSPlayer_UseServices : CPlayer_UseServices, CPlayerPawnComponent, ISchemaClass<CPlayerPawnComponent>, ISchemaClass<CPlayer_UseServices>, ISchemaClass<CCSPlayer_UseServices>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CPlayer_UseServices](/docs/api/schemadefinitions/cplayer_useservices)
- [CPlayerPawnComponent](/docs/api/schemadefinitions/cplayerpawncomponent)
- [ISchemaClass<CPlayerPawnComponent>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPlayer_UseServices>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CCSPlayer_UseServices>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### LastKnownUseEntity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_UseServices.cs#L18)

```csharp
ref CHandle<CBaseEntity> LastKnownUseEntity { get; }
```

#### Property Value

- [CHandle](/docs/api/natives/chandlet)<[CBaseEntity](/docs/api/schemadefinitions/cbaseentity)>

### LastUseTimeStamp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_UseServices.cs#L20)

```csharp
GameTime_t LastUseTimeStamp { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

### TimeLastUsedWindow

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayer_UseServices.cs#L22)

```csharp
GameTime_t TimeLastUsedWindow { get; }
```

#### Property Value

- [GameTime_t](/docs/api/schemadefinitions/gametime_t)

