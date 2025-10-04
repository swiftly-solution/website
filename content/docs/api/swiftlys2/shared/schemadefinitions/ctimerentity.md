---
title: CTimerEntity
---

```csharp
public interface CTimerEntity : CLogicalEntity, CServerOnlyEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CServerOnlyEntity>, ISchemaClass<CLogicalEntity>, ISchemaClass<CTimerEntity>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**Disabled** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimerEntity.cs#L22)

```csharp
ref int Disabled { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**InitialDelay** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimerEntity.cs#L24)

```csharp
ref float InitialDelay { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**LowerRandomBound** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimerEntity.cs#L34)

```csharp
ref float LowerRandomBound { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**OnTimer** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimerEntity.cs#L16)

```csharp
CEntityIOOutput OnTimer { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

**OnTimerHigh** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimerEntity.cs#L18)

```csharp
CEntityIOOutput OnTimerHigh { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

**OnTimerLow** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimerEntity.cs#L20)

```csharp
CEntityIOOutput OnTimerLow { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

**PauseAfterFiring** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimerEntity.cs#L32)

```csharp
ref bool PauseAfterFiring { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**Paused** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimerEntity.cs#L40)

```csharp
ref bool Paused { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**RefireTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimerEntity.cs#L26)

```csharp
ref float RefireTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**RemainingTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimerEntity.cs#L38)

```csharp
ref float RemainingTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**UpDownState** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimerEntity.cs#L28)

```csharp
ref bool UpDownState { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**UpperRandomBound** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimerEntity.cs#L36)

```csharp
ref float UpperRandomBound { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**UseRandomTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTimerEntity.cs#L30)

```csharp
ref int UseRandomTime { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

