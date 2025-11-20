---
title: CEnvSoundscape
---

```csharp
public interface CEnvSoundscape : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CEnvSoundscape>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Disabled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSoundscape.cs#L34)

```csharp
ref bool Disabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OnPlay

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSoundscape.cs#L18)

```csharp
CEntityIOOutput OnPlay { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### OverrideWithEvent

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSoundscape.cs#L24)

```csharp
ref bool OverrideWithEvent { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PositionNames

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSoundscape.cs#L30)

```csharp
string PositionNames { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ProxySoundscape

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSoundscape.cs#L32)

```csharp
ref CHandle<CEnvSoundscape> ProxySoundscape { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CEnvSoundscape](/docs/api/shared/schemadefinitions/cenvsoundscape)>

### Radius

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSoundscape.cs#L20)

```csharp
ref float Radius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SoundEventHash

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSoundscape.cs#L38)

```csharp
ref uint SoundEventHash { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### SoundEventName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSoundscape.cs#L22)

```csharp
string SoundEventName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### SoundscapeEntityListId

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSoundscape.cs#L28)

```csharp
ref int SoundscapeEntityListId { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SoundscapeIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSoundscape.cs#L26)

```csharp
ref int SoundscapeIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SoundscapeName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSoundscape.cs#L36)

```csharp
string SoundscapeName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

