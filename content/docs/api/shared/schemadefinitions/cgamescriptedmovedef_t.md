---
title: CGameScriptedMoveDef_t
---

```csharp
public interface CGameScriptedMoveDef_t : ISchemaClass<CGameScriptedMoveDef_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AimDisabled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveDef_t.cs#L29)

```csharp
ref bool AimDisabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AngRate

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveDef_t.cs#L25)

```csharp
ref float AngRate { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Dest

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveDef_t.cs#L21)

```csharp
ref QAngle Dest { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### DestEntity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveDef_t.cs#L19)

```csharp
ref CHandle<CBaseEntity> DestEntity { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### DestOffset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveDef_t.cs#L17)

```csharp
ref Vector DestOffset { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### Duration

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveDef_t.cs#L23)

```csharp
ref float Duration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ForcedCrouchState

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveDef_t.cs#L33)

```csharp
ref ForcedCrouchState_t ForcedCrouchState { get; }
```

#### Property Value

- [ForcedCrouchState_t](/docs/api/shared/schemadefinitions/forcedcrouchstate_t)

### IgnoreRotation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveDef_t.cs#L31)

```csharp
ref bool IgnoreRotation { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MoveSpeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameScriptedMoveDef_t.cs#L27)

```csharp
ref float MoveSpeed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

