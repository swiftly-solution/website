---
title: CLogicDistanceCheck
---

```csharp
public interface CLogicDistanceCheck : CLogicalEntity, CServerOnlyEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CServerOnlyEntity>, ISchemaClass<CLogicalEntity>, ISchemaClass<CLogicDistanceCheck>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### EntityA

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicDistanceCheck.cs#L17)

```csharp
string EntityA { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### EntityB

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicDistanceCheck.cs#L19)

```csharp
string EntityB { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### InZone1

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicDistanceCheck.cs#L25)

```csharp
CEntityIOOutput InZone1 { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### InZone2

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicDistanceCheck.cs#L27)

```csharp
CEntityIOOutput InZone2 { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### InZone3

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicDistanceCheck.cs#L29)

```csharp
CEntityIOOutput InZone3 { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### Zone1Distance

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicDistanceCheck.cs#L21)

```csharp
ref float Zone1Distance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Zone2Distance

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicDistanceCheck.cs#L23)

```csharp
ref float Zone2Distance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

