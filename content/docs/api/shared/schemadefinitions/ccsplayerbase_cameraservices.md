---
title: CCSPlayerBase_CameraServices
---

```csharp
public interface CCSPlayerBase_CameraServices : CPlayer_CameraServices, CPlayerPawnComponent, ISchemaClass<CPlayerPawnComponent>, ISchemaClass<CPlayer_CameraServices>, ISchemaClass<CCSPlayerBase_CameraServices>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**FOV** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerBase_CameraServices.cs#L16)

```csharp
ref uint FOV { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**FOVRate** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerBase_CameraServices.cs#L22)

```csharp
ref float FOVRate { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**FOVStart** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerBase_CameraServices.cs#L18)

```csharp
ref uint FOVStart { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**FOVTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerBase_CameraServices.cs#L20)

```csharp
GameTime_t FOVTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

**LastFogTrigger** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerBase_CameraServices.cs#L28)

```csharp
ref CHandle<CBaseEntity> LastFogTrigger { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

**TriggerFogList** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerBase_CameraServices.cs#L26)

```csharp
ref CUtlVector<CHandle<CBaseEntity>> TriggerFogList { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector-1)<[CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>>

**ZoomOwner** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerBase_CameraServices.cs#L24)

```csharp
ref CHandle<CBaseEntity> ZoomOwner { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

## Methods

**FOVRateUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerBase_CameraServices.cs#L33)

```csharp
void FOVRateUpdated()
```

**FOVStartUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerBase_CameraServices.cs#L31)

```csharp
void FOVStartUpdated()
```

**FOVTimeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerBase_CameraServices.cs#L32)

```csharp
void FOVTimeUpdated()
```

**FOVUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerBase_CameraServices.cs#L30)

```csharp
void FOVUpdated()
```

**ZoomOwnerUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CCSPlayerBase_CameraServices.cs#L34)

```csharp
void ZoomOwnerUpdated()
```

