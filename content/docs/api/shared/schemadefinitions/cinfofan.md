---
title: CInfoFan
---

```csharp
public interface CInfoFan : CPointEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CPointEntity>, ISchemaClass<CInfoFan>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### CurveDistRange

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoFan.cs#L21)

```csharp
ref float CurveDistRange { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FanForceCurveString

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoFan.cs#L23)

```csharp
string FanForceCurveString { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### FanForceMaxRadius

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoFan.cs#L17)

```csharp
ref float FanForceMaxRadius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FanForceMinRadius

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoFan.cs#L19)

```csharp
ref float FanForceMinRadius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### CurveDistRangeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoFan.cs#L27)

```csharp
void CurveDistRangeUpdated()
```

### FanForceCurveStringUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoFan.cs#L28)

```csharp
void FanForceCurveStringUpdated()
```

### FanForceMaxRadiusUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoFan.cs#L25)

```csharp
void FanForceMaxRadiusUpdated()
```

### FanForceMinRadiusUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoFan.cs#L26)

```csharp
void FanForceMinRadiusUpdated()
```

