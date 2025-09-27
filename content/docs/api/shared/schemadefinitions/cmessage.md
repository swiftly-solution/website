---
title: CMessage
---

```csharp
public interface CMessage : CPointEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CPointEntity>, ISchemaClass<CMessage>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**Message** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMessage.cs#L16)

```csharp
ref CUtlSymbolLarge Message { get; }
```

#### Property Value

- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)

**MessageAttenuation** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMessage.cs#L20)

```csharp
ref int MessageAttenuation { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**MessageVolume** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMessage.cs#L18)

```csharp
ref float MessageVolume { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**Noise** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMessage.cs#L24)

```csharp
ref CUtlSymbolLarge Noise { get; }
```

#### Property Value

- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)

**OnShowMessage** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMessage.cs#L26)

```csharp
CEntityIOOutput OnShowMessage { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

**Radius** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMessage.cs#L22)

```csharp
ref float Radius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

