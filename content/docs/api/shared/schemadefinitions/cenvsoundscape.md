---
title: CEnvSoundscape
---

```csharp
public interface CEnvSoundscape : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CEnvSoundscape>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**Disabled** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSoundscape.cs#L32)

```csharp
ref bool Disabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**OnPlay** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSoundscape.cs#L16)

```csharp
CEntityIOOutput OnPlay { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

**OverrideWithEvent** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSoundscape.cs#L22)

```csharp
ref bool OverrideWithEvent { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**PositionNames** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSoundscape.cs#L28)

```csharp
ISchemaFixedArray<CUtlSymbolLarge> PositionNames { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)>

**ProxySoundscape** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSoundscape.cs#L30)

```csharp
ref CHandle<CEnvSoundscape> ProxySoundscape { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CEnvSoundscape](/docs/api/shared/schemadefinitions/cenvsoundscape)>

**Radius** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSoundscape.cs#L18)

```csharp
ref float Radius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**SoundEventHash** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSoundscape.cs#L36)

```csharp
ref uint SoundEventHash { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**SoundEventName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSoundscape.cs#L20)

```csharp
ref CUtlSymbolLarge SoundEventName { get; }
```

#### Property Value

- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)

**SoundscapeEntityListId** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSoundscape.cs#L26)

```csharp
ref int SoundscapeEntityListId { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**SoundscapeIndex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSoundscape.cs#L24)

```csharp
ref int SoundscapeIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**SoundscapeName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSoundscape.cs#L34)

```csharp
ref CUtlSymbolLarge SoundscapeName { get; }
```

#### Property Value

- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)

