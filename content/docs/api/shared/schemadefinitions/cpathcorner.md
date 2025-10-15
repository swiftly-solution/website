---
title: CPathCorner
---

```csharp
public interface CPathCorner : CPointEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CPointEntity>, ISchemaClass<CPathCorner>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### OnPass

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathCorner.cs#L21)

```csharp
CEntityIOOutput OnPass { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### Radius

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathCorner.cs#L19)

```csharp
ref float Radius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Wait

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathCorner.cs#L17)

```csharp
ref float Wait { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

