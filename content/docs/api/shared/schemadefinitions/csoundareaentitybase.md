---
title: CSoundAreaEntityBase
---

```csharp
public interface CSoundAreaEntityBase : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CSoundAreaEntityBase>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Disabled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundAreaEntityBase.cs#L18)

```csharp
ref bool Disabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Pos

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundAreaEntityBase.cs#L22)

```csharp
ref Vector Pos { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### SoundAreaType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundAreaEntityBase.cs#L20)

```csharp
string SoundAreaType { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### DisabledUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundAreaEntityBase.cs#L24)

```csharp
void DisabledUpdated()
```

### PosUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundAreaEntityBase.cs#L26)

```csharp
void PosUpdated()
```

### SoundAreaTypeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundAreaEntityBase.cs#L25)

```csharp
void SoundAreaTypeUpdated()
```

