---
title: CSoundPatch
---

```csharp
public interface CSoundPatch : ISchemaClass<CSoundPatch>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ClassName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundPatch.cs#L40)

```csharp
string ClassName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### CloseCaptionDuration

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundPatch.cs#L36)

```csharp
ref float CloseCaptionDuration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Ent

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundPatch.cs#L26)

```csharp
ref CHandle<CBaseEntity> Ent { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### Filter

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundPatch.cs#L34)

```csharp
CCopyRecipientFilter Filter { get; }
```

#### Property Value

- [CCopyRecipientFilter](/docs/api/shared/schemadefinitions/ccopyrecipientfilter)

### IsPlaying

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundPatch.cs#L32)

```csharp
ref int IsPlaying { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### LastTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundPatch.cs#L22)

```csharp
ref float LastTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Pitch

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundPatch.cs#L16)

```csharp
CSoundEnvelope Pitch { get; }
```

#### Property Value

- [CSoundEnvelope](/docs/api/shared/schemadefinitions/csoundenvelope)

### ShutdownTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundPatch.cs#L20)

```csharp
ref float ShutdownTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### SoundEntityIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundPatch.cs#L28)

```csharp
ref uint SoundEntityIndex { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### SoundOrigin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundPatch.cs#L30)

```csharp
ref Vector SoundOrigin { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### SoundScriptName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundPatch.cs#L24)

```csharp
string SoundScriptName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### UpdatedSoundOrigin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundPatch.cs#L38)

```csharp
ref bool UpdatedSoundOrigin { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Volume

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundPatch.cs#L18)

```csharp
CSoundEnvelope Volume { get; }
```

#### Property Value

- [CSoundEnvelope](/docs/api/shared/schemadefinitions/csoundenvelope)

