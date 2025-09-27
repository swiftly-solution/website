---
title: CChangeLevel
---

```csharp
public interface CChangeLevel : CBaseTrigger, CBaseToggle, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseToggle>, ISchemaClass<CBaseTrigger>, ISchemaClass<CChangeLevel>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**LandmarkName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChangeLevel.cs#L18)

```csharp
ref CUtlString LandmarkName { get; }
```

#### Property Value

- [CUtlString](/docs/api/shared/natives/cutlstring)

**MapName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChangeLevel.cs#L16)

```csharp
ref CUtlString MapName { get; }
```

#### Property Value

- [CUtlString](/docs/api/shared/natives/cutlstring)

**NewChapter** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChangeLevel.cs#L26)

```csharp
ref bool NewChapter { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**NoTouch** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChangeLevel.cs#L24)

```csharp
ref bool NoTouch { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**OnChangeLevel** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChangeLevel.cs#L20)

```csharp
CEntityIOOutput OnChangeLevel { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

**OnChangeLevelFired** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChangeLevel.cs#L28)

```csharp
ref bool OnChangeLevelFired { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**Touched** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CChangeLevel.cs#L22)

```csharp
ref bool Touched { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

