---
title: SwiftlyCoreInjection
---

```csharp
public static class SwiftlyCoreInjection
```

- Inheritance

- Inherited Members

## Methods

### **AddSwiftly(IServiceCollection, ISwiftlyCore, bool, bool)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/SwiftlyCoreInjection.cs#L10)

```csharp
public static IServiceCollection AddSwiftly(this IServiceCollection self, ISwiftlyCore core, bool addLogger = true, bool addConfiguration = true)
```

- Parameters

- **self**: [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)
- **core**: [ISwiftlyCore](/docs/api/shared/iswiftlycore)
- **addLogger**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)
- **addConfiguration**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

- Returns

- [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

